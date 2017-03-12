import React, { Component } from 'react';
import _ from 'lodash';

class MailListItem extends Component {
   constructor(props) {
        super(props);
        this.state = {
            new: props.item.new
        };
        this.select = this.select.bind(this);
    }
    

    select(){
        this.setState({new: false});
        this.props.select(this.props.item.id);
    }

    render() {
        return(
            <li className={`label-color-${this.props.tag} ` + ((this.props.selected === this.props.item.id) ? 'active' : '')} 
                onClick={this.select}>
                {this.state.new === true &&
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
            selected: 1
        };
        this.select = this.select.bind(this);
    }


    select(itemID) {
        this.setState({ selected: itemID});
    }

    render() {
        let data = [{
            id: 1,
            name: "Lisa Guerrero",
            title: "Company Goals for 2016",
            preview: "Hello everyone, i'm happy to share with you our new company goals",
            date: "20:24",
            tag: "green",
            new: true
        }, {
            id: 2,
            name:"Lisa Guerrero",
            title:"Company Goals for 2016",
            preview:"Hello everyone, i'm happy to share with you our new company goals",
            date: "20:24",
            tag: "purple",
            new: true
        }, {
            id: 3,
            name: "Peter Gregor",
            title: "Design for health project",
            preview: "Hi Jessica, I love your UI design work, and i'd like to talk with you",
            date: "14:10",
            tag: "green",
            new: true
        }, {
            id: 4,
            name: "Sara Richardson",
            title: "Meeting Zurich",
            preview: "Hi Jessica, I will be in Zurich tomorrow, hope we can meet there",
            date: "17:10",
            tag: "blue",
            new: true
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
                            select={this.select}
                            selected={this.state.selected}
                        />
                    )}
                </ul>
            </div>
        );
    }
};

export default MailList;