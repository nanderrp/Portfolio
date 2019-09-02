import React, { Component } from 'react'
import './BigNames.css';
import { Link } from 'react-router-dom';


export default class BigNames extends Component {
    

    render() {


        return (
            <div className="BigNames">
                <Link  className="BigNames-link" to='/Adobe' style={{textDecoration:'none'}}>
                    <span className='Name'>Adobe Creative Cloud</span>
                    <span className='Text'>: App Banner</span>  <i className="fas fa-lock"></i>
                </Link>
                <Link className="BigNames-link" to='/Wacom'>
                    <span className='Name'>Wacom</span>
                    <span className='Text'>: Product Launch Emails</span>  <i className="fas fa-lock"></i>
                </Link>
                <Link className="BigNames-link" to='/Linkdin'>
                    <span className='Name'>Linkdin</span>
                    <span className='Text'>: Sponsored Inmail Email</span>  <i className="fas fa-lock"></i>
                </Link>
                <Link className="BigNames-link"  to='/UnderArmour'>
                    <span className='Name'>Under Armour</span>
                    <span className='Text'>: You vs the Year Emails</span>  <i className="fas fa-lock"></i>
                </Link>
                <Link className="BigNames-link"  to='/Hyatt'>
                    <span className='Name'>Hyatt</span>
                    <span className='Text'>: Mobile Check-in</span>  <i className="fas fa-lock"></i>
                </Link>
                <Link className="BigNames-link"  to='/CapitalGroup'>
                    <span className='Name'>Capital Group</span>
                    <span className='Text'>: Email Newsletters</span>  <i className="fas fa-lock"></i>
                </Link>
                <Link className="BigNames-link" to='/AARP'>
                    <span className='Name'>AARP</span>
                    <span className='Text'>: Girlfriend Illustration</span>  <i className="fas fa-lock"></i>
                </Link>
                <Link className="BigNames-link"  to='/Thesis'>
                    <span className='Name'>Thesis</span>
                    <span className='Text'>: Branding and Web Design</span>  <i className="fas fa-lock"></i>
                </Link>
            </div>
        )
    }
}