import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render(){
        return (
            <div>
                <h1>Hello World</h1>            
            </div>
        );
    }
}

if(Meteor.isClient){
    Meteor.startup(function() {
        ReactDOM.render(<App />, document.getElementById("render-target"));
    });
}