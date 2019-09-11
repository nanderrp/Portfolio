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
                    <span style={{textDecoration: 'underline   !important'}} className='Name'>Adobe Creative Cloud</span>
                    <span style={{textDecoration: 'underline  !important'}} className='Text'>: App Banner</span>  <img src={Lock} alt="..."className="Lock"></img>
                </Link>
                <Link className="BigNames-link" to='/Wacom'>
                    <span style={{textDecoration: 'underline  !important'}} className='Name'>Wacom</span>
                    <span style={{textDecoration: 'underline  !important'}} className='Text'>: Product Launch Emails</span>  <img src={Lock} alt="..."className="Lock"></img>
                </Link>
                <Link className="BigNames-link" to='/Linkedin'>
                    <span style={{textDecoration: 'underli !important'}} className='Name'>Linkedin</span>
                    <span style={{textDecoration: 'underlin !important'}} className='Text'>: Sponsored Inmail Email</span>  <img src={Lock} alt="..."className="Lock"></img>
                </Link>
             
                
                <Link className="BigNames-link"  to='/UnderArmour'>
                    <span style={{textDecoration: 'underline  !important'}} className='Name'>Under Armour</span>
                    <span style={{textDecoration: 'underline !important'}} className='Text'>: You vs the Year Emails</span>  <img src={Lock} alt="..."className="Lock"></img>
                </Link>
                <Link className="BigNames-link"  to='/Hyatt'>
                    <span style={{textDecoration: 'underline  !important'}} className='Name'>Hyatt</span>
                    <span style={{textDecoration: 'underline  !important'}} lassName='Text'>: Mobile Check-in</span>  <img src={Lock} alt="..."className="Lock"></img>
                </Link>
                <Link className="BigNames-link"  to='/CapitalGroup'>
                    <span style={{textDecoration: 'underline  !important'}} className='Name'>Capital Group</span>
                    <span style={{textDecoration: 'underline  !important'}} className='Text'>: Email Newsletters</span>  <img src={Lock} alt="..."className="Lock"></img>
                </Link>
              
                <Link className="BigNames-link" to='/AARP'>
                    <span style={{textDecoration: 'underline  !important'}} className='Name'>AARP</span>
                    <span style={{textDecoration: 'underline   !important'}} className='Text'>: Girlfriend Illustration</span>  <img src={Lock} alt="..."className="Lock"></img>
                </Link>
                <Link className="BigNames-link"  to='/Thesis'>
                    <span style={{textDecoration: 'underline !important'}} className='Name'>Thesis</span>
                    <span style={{textDecoration: 'underline !important'}} className='Text'>: Branding and Web Design</span>  <img src={Lock} alt="..."className="Lock"></img>
                </Link>
               </div>
                </div>
        )
    }
}