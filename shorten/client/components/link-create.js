import React, { Component } from 'react';

class LinkCreate extends Component {
  constructor(props){
    super(props);
    this.state = { error: ''};
  }

  handleSubmit(event){
    event.preventDefault();
    Meteor.call('links.insert', this.refs.input.value, (error) => {
      if(error){
        this.setState({ error: 'Enter a valid url.'});
      } else {
        this.setState({ error: ''});
        this.refs.input.value = '';
      }
    });
  }

  render(){
    return (
      <div className="jumbotron">
      <h1 className="display-3">Welcome to Shorten</h1>
      <p className="lead">Shorten is an application that you can use to shorten lengthy url links that take up text and character space on social media posts. Shorten will solve your url problems and show you how many people have used your link.</p>
      <hr className="m-y-2" />
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <label>Link to shorten</label>
              <input ref="input" className="form-control" />
            </div>
            <div className="text-danger">{this.state.error}</div>
            <button className="btn btn-primary col-sm-6 col-sm-offset-3">Shorten This Link</button>
          </form>
      </div>
    );
  }
}

export default LinkCreate;
