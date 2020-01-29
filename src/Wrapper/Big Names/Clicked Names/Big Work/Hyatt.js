import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Password from '../Password';
import './Hyatt.css';
import Hyatt1 from './Big Images/Hyatt1.png';
import Hyatt2 from './Big Images/Hyatt2.png';

export default class Hyatt extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {
        return (
            <div className="Hyatt container-fluid">
                <Password />
                <Link align="right" className="Hyatt-exit" to='/' style={{ textDecoration: 'none'}}>&#10005;</Link>

                <h1 className="Hyatt-title">
                    Hyatt: Mobile Check-in
                </h1>

                <div className="Hyatt-img">
               
             
                    <img src={Hyatt1} className="Hyatt1" alt="..." />
                    
                    <img src={Hyatt2} className="Hyatt2" alt="..."/>
                   
        </div>
                
            </div>
        )
    }
}
