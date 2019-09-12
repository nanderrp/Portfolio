import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Email.css';


export default class Email extends Component {


    
    render() {
     
        return (
            <div className="Email">
                <Link className='Email-exit' to='/'> &#10005; </Link>
                <form className="Email-form" action="https://formspree.io/beccapierpoint@gmail.com" method="POST">
                <input className="Email-input" name="name" type="text"  placeholder="Who are you?"/>
                <input className="Email-input" name="email" type="email" placeHolder="Your Email"/>
                <textarea className="Email-body" name="message" type="text"  contentEditable="true" placeholder="Talk to me!"/>
                <input className="Email-btn" type="submit" value="Send"></input>
                </form>
            </div>
            
        )
    }
}
