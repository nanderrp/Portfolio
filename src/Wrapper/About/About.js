import React, { Component } from 'react';
import './About.css';
import email from './About icons/email.png';
import gram from './About icons/gram.png';

export default class About extends Component {
    render() {
        return (
            <div className="About container-fluid">
                <p>Aboout</p>
                <div className="About-text">
                Becca Pierpoint is a graphic designer in 
                Portland, Oregon, usually found hiking or trying 
                new restaurants. Find her on <a href="https://www.instagram.com/beccapierpoint/"><img className="About-img" src={gram} alt="instagram icon"/></a> or 
                send an <a href="..."><img className="About-img" src={email} alt="email icon"/></a>.
                </div>
            </div>
        )
    }
}
