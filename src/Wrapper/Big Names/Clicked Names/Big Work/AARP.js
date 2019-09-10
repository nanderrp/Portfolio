import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Password from '../Password';
import './AARP.css';
import AARP1 from './Big Images/AARP1.gif'; 
import AARP2 from './Big Images/AARP2.jpg';
import AARP3 from './Big Images/AARP3.jpg';


export default class AARP extends Component {
    render() {
        return (
            <div className="AARP container-fluid">
                <Password />
                <Link align="right" className="AARP-exit" to='/' style={{ textDecoration: 'none'}}>&#10005;</Link>

                <h1 className="AARP-title">
                    AARP: Girlfriend IllustrationAARP
                </h1>

                <div className="AARP-img">
               
             
                    <img src={AARP1} className="AARP1"  alt="..." />
                    
                    
                    <img src={AARP2} className="AARP2" alt="..."/>
              
                    <img src={AARP3} className="AARP3" alt="..."/>
                  
        
        </div>
            </div>
        )
    }
}
