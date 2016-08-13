import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Links } from '../../imports/collections/links';

class LinkList extends Component {
  renderRows(){
    return this.props.links.map((link)=>{
      const { clicks, url, token } = link;
      const shortLink = `http://localhost:3000/${token}`;
      return (
        <tr key={token}>
          <td>{url}</td>
          <td>
            <a href={shortLink} target="_blank">{shortLink}</a>
          </td>
          <td>{clicks}</td>
        </tr>
      );
    });
  }

  render(){
    return (
      <div className="container">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>URL</th>
              <th>Address</th>
              <th>Clicks</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('links');
  return { links: Links.find({}).fetch() };
}, LinkList);
