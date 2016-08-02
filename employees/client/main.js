import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeList from './components/employee-list';

const App = ()=> {
  return (
    <div>
    <EmployeeList />
    </div>
  );
}

//After meteor loads in the browser render react
Meteor.startup(()=>{
  //React Render
  ReactDOM.render(<App />, document.querySelector('.container'));
})
