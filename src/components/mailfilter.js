import React, { Component } from 'react';
import Button from './button';

export default class MailFilter extends Component {
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