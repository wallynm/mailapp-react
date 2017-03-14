import React, { Component } from 'react';
import Button from './button';

export default class MailFilter extends Component {
  get statusItems(){
    let data = [{
      color: 'orange',
      name: 'Personal',
      counter: 10
    }, {
      color: 'green',
      name: 'Work',
      counter: 10
    }, {
      color: 'purple',
      name: 'Friends',
      counter: 10
    }, {
      color: 'blue',
      name: 'Personal',
      counter: 10
    }];

    return data.map((item, key) =>
      <MailStatus
      key={key}
      item={item}
      color={item.color}
      name={item.name}
      counter={item.counter}
      />
    );
  }

  render() {
    return (
      <div className="col-1 panel sidebar">
        <header>
          <Button text="New message"/>
        </header>

        <ul className="mail-status">
          <li className="active">
            <span className="name">Inbox</span>
            <span className="counter">34</span>
          </li>
          <li>
            <span className="name">Sent</span>
            <span className="counter"></span>
          </li>
          <li>
            <span className="name">Draft</span>
            <span className="counter"></span>
          </li>
          <li>
            <span className="name">Junk</span>
            <span className="counter"></span>
          </li>
          <li>
            <span className="name">Trash</span>
            <span className="counter"></span>
          </li>
          <li>
            <span className="name">Reminder</span>
            <span className="counter"></span>
          </li>
        </ul>

        <ul className="mail-status">
          <label>Labels</label>
          {this.statusItems}
        </ul>
      </div>
    );
  }
};


class MailStatus extends Component {
  render() {
    return (
      <li>
        <i className={`icon-circle color-${this.props.color}`}></i>
        <span className="name">{this.props.name}</span>
        <span className="counter">{this.props.counter}</span>
      </li>
    );
  }
}