import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Password from '../Password';
import './Adobe.css';
import Adobe1 from './Big Images/mockup-1.png';
import Adobe2 from './Big Images/mockup-2.png';

export default class Adobe extends Component {
    
    render() {

    
    
        return (
            <div className="Adobe container-fluid">
                <Password />
                <Link align="right" className="Adobe-exit" to='/' style={{ textDecoration: 'none'}}>&#10005;</Link>

                <h1 className="Adobe-title">
                    Adobe Creative Cloud: App Banner
                </h1>
                
                
                <img className="Adobe-img1" src={Adobe1} alt='Adobe Mock up'></img>
                
                 
                <img className="Adobe-img2" src={Adobe2} alt='Adobe Mock up'></img>
                
                
            </div>
        )
    }
}

