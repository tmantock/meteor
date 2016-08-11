import React, { Component } from 'react';

class BinsShare extends Component {
  onShareClick() {
    const email = this.refs.email.value;
  }
  render(){
    return (
      <footer className="bins-share">
        <div className="input-group">
          <input ref="email" type="email" onClick={this.onShareClick.bind(this)} className="form-control" />
          <div className="input-group-btn">
            <button className="btn btn-default">
              Share Bin
            </button>
          </div>
        </div>
      </footer>
    );
  }
}

export default BinsShare;
