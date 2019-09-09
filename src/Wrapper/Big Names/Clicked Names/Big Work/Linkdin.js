import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Password from '../Password';
import './Linkdin.css';
import LinkdinMov from './Big Images/Linkdin.mov';
import Linkdin1 from './Big Images/Linkdin1.jpg';

export default class Linkdin extends Component {
    render() {
        return (
            <div className="Linkdin container-fluid">
                <Password />
                <Link align="right" className="Linkdin-exit" to='/' style={{ textDecoration: 'none'}}>&#10005;</Link>

                <h1 className="Linkdin-title">
                    Adobe Creative Cloud: App Banner
                </h1>
                
                <img className="Linkdin-img1" src={Linkdin1} alt='Linkdin mockup'></img>
                 
                <video className="Linkdin-mov" controls="controls" loop="true" width="738px" src={LinkdinMov} alt='Linkdin mov'></video>
                
            </div>
        )
    }
}
