import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Email.css';


export default class Email extends Component {
    constructor(props) {
        super(props);
      
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
    handleSubmit(e){
            e.preventDefault();
            alert("Your Email Sent!");
          
            
    }
    
    render() {
     
        return (
            <div className="Email">
                <Link className='Email-exit' to='/'> &#10005; </Link>
                <form className="Email-form" action="https://formspree.io/beccapierpoint@gmail.com" method="POST" onSubmit={this.handleSubmit}>
                <input className="Email-input"type="name"  placeholder="Who are you?" onChange={this.handleChange}/>
                <input className="Email-input"type="email" placeHolder="Your Email" onChange={this.handleChange}/>
                <textarea className="Email-input"type="text"  contentEditable="true" placeholder="Talk to me!" onChange={this.handleChange}/>
                <button className="Email-btn" type="submit">Send</button>
                </form>
            </div>
            
        )
    }
}
