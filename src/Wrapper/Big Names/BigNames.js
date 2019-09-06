import React, { Component } from 'react'
import './BigNames.css';
import Lock from './Clicked Names/Big Work/lock.png';
import { Link } from 'react-router-dom';


export default class BigNames extends Component {
    

    render() {


        return (
            <div className="BigNames container-fluid">
                <p>Big Names</p>
                <div className="BigNames-list">
                <Link  className="BigNames-link" to='/Adobe' style={{textDecoration:'none'}}>
                    <span className='Name'>Adobe Creative Cloud</span>
                    <span className='Text'>: App Banner</span>  <img src={Lock} alt="..."className="Lock"></img>
                </Link>
                <Link className="BigNames-link" to='/Wacom'>
                    <span className='Name'>Wacom</span>
                    <span className='Text'>: Product Launch Emails</span>  <img src={Lock} alt="..."className="Lock"></img>
                </Link>
                <Link className="BigNames-link" to='/Linkdin'>
                    <span className='Name'>Linkdin</span>
                    <span className='Text'>: Sponsored Inmail Email</span>  <img src={Lock} alt="..."className="Lock"></img>
                </Link>
             
                
                <Link className="BigNames-link"  to='/UnderArmour'>
                    <span className='Name'>Under Armour</span>
                    <span className='Text'>: You vs the Year Emails</span>  <img src={Lock} alt="..."className="Lock"></img>
                </Link>
                <Link className="BigNames-link"  to='/Hyatt'>
                    <span className='Name'>Hyatt</span>
                    <span className='Text'>: Mobile Check-in</span>  <img src={Lock} alt="..."className="Lock"></img>
                </Link>
                <Link className="BigNames-link"  to='/CapitalGroup'>
                    <span className='Name'>Capital Group</span>
                    <span className='Text'>: Email Newsletters</span>  <img src={Lock} alt="..."className="Lock"></img>
                </Link>
              
                <Link className="BigNames-link" to='/AARP'>
                    <span className='Name'>AARP</span>
                    <span className='Text'>: Girlfriend Illustration</span>  <img src={Lock} alt="..."className="Lock"></img>
                </Link>
                <Link className="BigNames-link"  to='/Thesis'>
                    <span className='Name'>Thesis</span>
                    <span className='Text'>: Branding and Web Design</span>  <img src={Lock} alt="..."className="Lock"></img>
                </Link>
               </div>
                </div>
        )
    }
}