import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Wacom.css';
import Password from '../Password';
import Wacom1 from './Big Images/Wacom1.png';
import Wacom2 from './Big Images/Wacom2.png';

export default class Wacom extends Component {
    render() {
        return (
            <div className="Wacom Container-fluid">
                <Password />
                <Link align="right" className="Wacom-exit" to='/' style={{ textDecoration: 'none'}}>&#10005;</Link>

                <h1 className="Wacom-title">
                    Wacom: Product Launch Emails
                </h1>

                <div className="Wacom-img">
               
                    <img src={Wacom1} className="Wacom1" alt="..." />
                    
                    <img src={Wacom2} className="Wacom2" alt="..."/>
                    
        </div>
                
            </div>
        )
    }
}
