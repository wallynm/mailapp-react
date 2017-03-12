import React from 'react';
import {MailFilter , MailList} from './components';
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

export default App;

