import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import { image, helpers } from 'faker';
import { Employees } from '../imports/collections/employees';

Meteor.startup(()=>{
  const numberRecords = Employees.find({}).count();
  console.log(numberRecords);
  if(!numberRecords){
    _.times(5000, () =>{
      const { name, email, phone } = helpers.createCard();
      Employees.insert({
        name,
        email,
        phone,
        avatar: image.avatar()
      });
    });
  }

  Meteor.publish('employees', function (per_page) {
    return Employees.find({}, { limit: per_page });
  })
});
