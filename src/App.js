import React, { Component } from 'react';
import _ from 'lodash';
import './App.css';

var App = React.createClass({
  render() {
    return(
      <div>
        <MailFilter/>
        <MailList/>
      </div>
    )
  }
});

var Button = React.createClass({
  render() {
    return (
      <a href="#send-mail" className="btn-success btn-new-message shadow-box">
        <div className="clearfix">
          <i className="icon-send-message"></i>
          <span>{this.props.text}</span>
        </div>
      </a>  
    )
  }
})

class MailFilter extends Component {

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
          <li>
            <i className="icon-circle color-orange"></i>
            <span className="name">Personal</span>
            <span className="counter">10</span>
          </li>
          <li>
            <i className="icon-circle color-green"></i>
            <span className="name">Work</span>
            <span className="counter">10</span>
          </li>
          <li>
            <i className="icon-circle color-purple"></i>
            <span className="name">Friends</span>
            <span className="counter">10</span>
          </li>
          <li>
            <i className="icon-circle color-blue"></i>
            <span className="name">Personal</span>
            <span className="counter">10</span>
          </li>  
          <li>
            <i className="icon-add"></i>
            <span className="name">Add</span>
          </li>
        </ul>
      </div>
    );
  }
};


class MailListItem extends Component {
 render() {
   return(
     <li className={`active label-color-${ this.props.tag }`}>
       <div className="name">{this.props.name}</div>
       <div className="title">{this.props.title}</div>
       <div className="preview">{this.props.preview}...</div>
       <time>{this.props.date}</time>
     </li>
   )
 }

  onChange(event) {
    if (event.target.checked) {
      this.props.onSelect(this.item.id);
    } else {
      this.props.onDeselect(this.item.id);
    }
  }
}


class MailList extends Component {

 constructor(props) {
  console.info(_.each);
    super(props);
    this.state = {
      selected: {}
    };
  }

  selected(itemID) {
    return !!this.state.selected[itemID];
  }
  
  select(itemID) {
    var selected = this.state.selected;
    selected[itemID] = true;
    this.setState({ selected: selected });
  }
  
  deselect(itemID) {
    var selected = this.state.selected;
    delete selected[itemID];
    this.setState({ selected: selected });
  }
  
  render() {
    let data = [{
      name: "Lisa Guerrero",
      title: "Company Goals for 2016",
      preview: "Hello everyone, i'm happy to share with you our new company goals",
      date: "20:24",
      tag: "green"
    }, {
      name:"Lisa Guerrero",
      title:"Company Goals for 2016",
      preview:"Hello everyone, i'm happy to share with you our new company goals",
      date: "20:24",
      tag: "purple"
    }, {
      name: "Peter Gregor",
      title: "Design for health project",
      preview: "Hi Jessica, I love your UI design work, and i'd like to talk with you",
      date: "14:10",
      tag: "green"
    }, {
      name: "Sara Richardson",
      title: "Meeting Zurich",
      preview: "Hi Jessica, I will be in Zurich tomorrow, hope we can meet there",
      date: "17:10",
      tag: "blue"
    }];

    return (
      <div className="col-2 panel list-panel">
      <header>
        <div className="dropdown-list">
          <label htmlFor="select-sort">Sort by
            <span className="selected-item">Date</span>
            <i className="icon-caret-down"></i>
          </label>
          <input type="checkbox" id="select-sort"/>
          <ul className="shadow-box">
            <li><label htmlFor="select-sort">Order by date</label></li>
            <li><label htmlFor="select-sort">Order by priority</label></li>
            <li><label htmlFor="select-sort">Order by frienship</label></li>
          </ul>
        </div>
      </header>

      <ul className="mail-list">
        {_.map(data, (item, key) =>
          <MailListItem
            key={key}
            item={item}
            name={item.name}
            title={item.title}
            preview={item.preview}
            date={item.date}
            tag={item.tag}
          />
        )}
      </ul>
    </div>
    );
  }
};


export default App;

