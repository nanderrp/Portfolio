import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Password from '../Password';
import './Adobe.css';
import Adobe1 from './Big Images/mockup-1.png';
import Adobe2 from './Big Images/mockup-2.png';

export default class Adobe extends Component {


    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    render() {

    
    
        return (
            <div className="Adobe container-fluid">
                <Password />
                <Link align="right" className="Logos-exit" to='/' style={{ textDecoration: 'none'}}>&#10005;</Link>

                <h1 className="Adobe-title">
                    Adobe Creative Cloud: App Banner
                </h1>
                <p className="Adobe-blurb">
                Image curation for an app banner. Done with lots of hard work skill and talent. Here below are the images that prove I did the work.
                </p>
                
                
                <img className="Adobe-img1" src={Adobe1} alt='Adobe Mock up'></img>
                
                 
                <img className="Adobe-img2" src={Adobe2} alt='Adobe Mock up'></img>
                
                
            </div>
        )
    }
}

