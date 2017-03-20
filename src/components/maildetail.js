import React, { Component } from 'react';
import _ from 'lodash';

export class MailDetail extends Component {
  render() {
  let styleDetail = {
    backgroundImage: 'url(https://pbs.twimg.com/profile_images/507626256100110338/pK3qZBAq.jpeg)'
  }

  if(_.isEmpty(this.props.mail))
    return null;

  return (
    <div className="col-3 mail-content">
      <header>
        <div className="box-action">
          <button><i className="icon-trash"></i></button>
          <button><i className="icon-reply"></i></button>
          <button><i className="icon-reply-all"></i></button>
          <button><i className="icon-right-arrow"></i></button>
          <button><i className="icon-opes"></i></button>
        </div>
        <div className="box-search">
          <div className="block-group">
            <i className="icon-search"></i>
            <input type="text" id="mail-search" placeholder="Search"/>      
          </div>
        </div>
        <div className="box-profile">
          <div className="profile-img" style={styleDetail}></div>
          <div className="mail-counter">
            1
          </div>
        </div>
      </header>
      <div className="content">
        <div className="mail-actions">
            <div className="row">
              <div className="btn btn-transparent next"><i className="icon-left"></i></div>
              <div className="btn btn-transparent prev"><i className="icon-right"></i></div>
            </div>
          </div>
        <div className="mail-info ">
          <div className="sender">
            <span className="mail-from">Peter Gregor</span>
            to
            <span className="mail-to">Jessica Larson</span>
          </div>
          <span className="mail-title">Design for Health Project</span>
        </div>
        <div className="mail-body">
          {this.props.mail.body}
        </div>
    </div>
  </div>
  )
  }
}

export default MailDetail;