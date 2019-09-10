import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Password from '../Password';
import './Linkedin.css';
import LinkdinMov from './Big Images/Linkdin.mov';
import Linkdin1 from './Big Images/Linkdin1.jpg';

export default class Linkedin extends Component {
    render() {
        return (
            <div className="Linkedin container-fluid">
                <Password />
                <Link align="right" className="Linkedin-exit" to='/' style={{ textDecoration: 'none'}}>&#10005;</Link>

                <h1 className="Linkedin-title">
                    Adobe Creative Cloud: App Banner
                </h1>
                
                <img className="Linkedin-img1" src={Linkdin1} alt='Linkedin mockup'></img>
                 
                <video className="Linkedin-mov" controls="controls" loop="true" width="738px" src={LinkdinMov} alt='Linkdin mov'></video>
                
            </div>
        )
    }
}
