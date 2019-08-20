import React, { Component } from 'react'
import './BigNames.css';
import Password from './Clicked Names/Password';
import { Link } from 'react-router-dom';


export default class BigNames extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPasswordVisible: false,
        }
        this.handleClick = this.handleClick.bind(this)
    }
    


    handleClick = (e) => { 
    e.preventDefault();
    this.setState({ isPasswordVisible: !this.state.isPasswordVisible });
}
     

    render() {


        return (
            <div className="BigNames">
                <Link className='button' to='/Adobe' onClick={this.state. handleCLick} style={{textDecoration: 'none'}}>
                    <span className='Name'>Adobe Creative Cloud</span>
                    <span className='Text'>: App Banner</span>  <i className="fas fa-lock"></i>
                    </Link>
                    
           
                <button onClick={this.handleClick.bind(this)}>
                    <span className='Name'>Wacom</span>
                    <span className='Text'>: Product Launch Emails</span>  <i className="fas fa-lock"></i>
                </button>
                <button onClick={this.handleClick.bind(this)}>
                    <span className='Name'>Lindin</span>
                    <span className='Text'>: Sponsored Inmail Email</span>  <i className="fas fa-lock"></i>
                </button>
                <button onClick={this.handleClick.bind(this)}>
                    <span className='Name'>Under Armour</span>
                    <span className='Text'>: You vs the Year Emails</span>  <i className="fas fa-lock"></i>
                </button>
                <button onClick={this.handleClick.bind(this)}>
                    <span className='Name'>Hyatt</span>
                    <span className='Text'>: Mobile Check-in</span>  <i className="fas fa-lock"></i>
                </button>
                <button onClick={this.handleClick.bind(this)}>
                    <span className='Name'>Capitol Group</span>
                    <span className='Text'>: Email Newsletters</span>  <i className="fas fa-lock"></i>
                </button>
                <button onClick={this.handleClick.bind(this)}>
                    <span className='Name'>AARP</span>
                    <span className='Text'>: Girlfriend Illustration</span>  <i className="fas fa-lock"></i>
                </button>
                <button onClick={this.handleClick.bind(this)}>
                    <span className='Name'>Boy Scouts of America</span>
                    <span className='Text'>: Email Newsletter</span>  <i className="fas fa-lock"></i>
                </button>
                { this.state.isPasswordVisible ? <Password /> : null }
            </div>
        )
    }
}