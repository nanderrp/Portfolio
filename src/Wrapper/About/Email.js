import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactContactForm from 'react-mail-form';
import './Email.css';

export default class Email extends Component {
    render() {
        return (
            <div className="Email">
                <Link className='Email-exit' to='/'> &#10005; </Link>
                <ReactContactForm className="Email-form" to="beccapierpoint@gmail.com" />
            </div>
            
        )
    }
}
