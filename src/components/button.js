import React, { Component } from 'react';
export default class Button extends Component {
    render() {
        return (
            <a href="#send-mail" className="btn-success btn-new-message shadow-box">
                <div className="clearfix">
                    <i className="icon-send-message"/>
                    <span>{this.props.text}</span>
                </div>
            </a>
        )
    }
};
