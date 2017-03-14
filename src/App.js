import React, { Component } from 'react';
import {MailFilter , MailList} from './components';
import './App.css';

import MailStore from './stores/MailStore';
import MailListStore from './stores/MailListStore';

function getApplicationState () {
  return {
    mail: MailStore.getMailList(),
    mailList: {
      items: MailListStore.getMailList(),
      isVisible: MailStore.getMailVisible()
    }
  }
}

// Create main View Controller
export class Application extends Component{
  constructor(props){
    super(props);
    this.state = getApplicationState();
  }

  // Add change listener to store
  componentDidMount() {
    MailStore.addChangeListener(this._onChange);
    MailListStore.addChangeListener(this._onChange);
  }

  // Remove change listener from store
  componentWillUnmount() {
    MailStore.removeChangeListener(this._onChange);
    MailListStore.removeChangeListener(this._onChange);
  }

  // Update state when store change
  _onChange() {
    this.setState(getApplicationState());
  }

  // Render the main component and childs, passing state via props
  render() {
    return (
      <div>
        <MailFilter mail={this.state.cart} />
        <MailList mailList={this.state.mailList} />
      </div>
    );
  }
}








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

export default App;

