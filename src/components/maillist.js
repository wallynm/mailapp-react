import React, { Component } from 'react';
import _ from 'lodash';

class MailListItem extends Component {
 constructor(props) {
  super(props);
  this.select = this.select.bind(this);
}

select(){
  this.props.select(this.props.item.id);
}

render() {
  return(
    <li className={`label-color-${this.props.tag} ` + ((this.props.selected === this.props.item.id) ? 'active' : '')} onClick={this.select}>
      {this.props.item.new === true &&
        <div className="status-icon">
          <i className="icon-circle-fill color-blue"/>
        </div>
      }
      <div className="name">{this.props.item.name}</div>
      <div className="title">{this.props.item.title}</div>
      <div className="preview">{this.props.item.preview}...</div>
      <time>{this.props.date}</time>
    </li>
    )
  }
}

class MailList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
    this.select = this.select.bind(this);
  }

  select(itemID) {
    this.props.select(itemID);
    this.setState({ selected: itemID});
  }

  filter(filter){
    this.setState({filter: filter});
  }

  get dataItems(){
    console.info(this.props)

    let data = _(this.props.data);
    if(!_.isEmpty(this.props.filter)){
      data = data.filter((item) =>  this.props.filter.indexOf(item.tag) >= 0)
    }



    return data.value().map((item, key) =>
      <MailListItem
      key={key}
      item={item}
      select={this.select}
      selected={this.state.selected}
      />
    );
  }

  render() {

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
          {this.dataItems}
        </ul>
      </div>
    );
  }
};

export default MailList;