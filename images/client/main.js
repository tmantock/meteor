import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image-list';
const ROOT_URL = 'https://api.imgur.com/3/gallery/hot/viral/0';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { images: [] }
  }

  componentWillMount(){
    axios.get(ROOT_URL).then((data) => this.setState({ images: data.data.data }));
  }

  render(){
    return (
      <div>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
};

Meteor.startup(()=>{
  ReactDOM.render(<App />, document.querySelector('.container'));
});
