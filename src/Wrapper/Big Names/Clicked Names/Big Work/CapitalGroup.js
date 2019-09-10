import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Password from '../Password';
import './CapitalGroup.css';
import Capital1 from "./Big Images/Capital1.png";
import Capital2 from "./Big Images/Capital2.png";
import Capital3 from "./Big Images/Capital3.png";
import Capital4 from "./Big Images/Capital4.png";
import Capital5 from "./Big Images/Capital5.png";

export default class CapitalGroup extends Component {
    render() {
        return (
            <div className="Capital container-fluid">
                <Password />
                <Link align="right" className="Capital-exit" to='/' style={{ textDecoration: 'none'}}>&#10005;</Link>

                <h1 className="Capital-title">
                    Capital Group: Email Newsletters
                </h1>
                
                <div className="Capital-img">
        
                      <img src={Capital1} className="Capital1" alt="..." />
                   
                      <img src={Capital2} className="Capital2" alt="..."/>
                      
                      <img src={Capital3} className="Capital3" alt="..."/>
                      
                      <img src={Capital4} className="Capital4" alt="..."/>
                      
                      <img src={Capital5} className="Capital5" alt="..."/>
                      
                  
                </div>
            </div>
        )
    }
}
