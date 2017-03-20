import React, { Component } from 'react';
import { MailFilterData , MailListData } from './utils';
import { MailFilter , MailList, MailDetail } from './components';
import './App.css';
import _ from 'lodash';

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








class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      list: MailListData.load(),
      filter: [],
      mail: null
    }
    this.filterMail = this.filterMail.bind(this);
    this.selectMail = this.selectMail.bind(this);
  }

  filterMail(tags){
    console.info('TAGS: ',tags)
    this.setState({list: tags});
  }

  selectMail(id) {
    let mail = _.find(this.state.list, {id});
    mail.new = false;
    this.setState({mail});
  }

  render() {
    console.info('RENDER: ', this.state.list)
    console.info('SELECTED MAIL: ', this.state.mail)
    return(
      <div>
        <MailFilter filter={this.filterMail}/>
        <MailList data={this.state.list} select={this.selectMail} filter={this.state.filter}/>
        <MailDetail mail={this.state.mail}/>
      </div>
    )
  }
};

export default App;

