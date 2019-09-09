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

                <div className="Carrousel">
               
             <div id="carouselExampleControls" className="carousel slide" data-interval="4000" data-ride="false">
                <div className="carousel-inner">
                    <div id="carouselItem"className="carousel-item active">
                    <img src={Wacom1} className="Wacom1 d-block w-80 Wacom-img" alt="..." />
                    </div>
                    <div id="carouselItem"className="carousel-item">
                    <img src={Wacom2} className="Wacom2 d-block w-80 Wacom-img" alt="..."/>
                    </div>
                    </div>
                    <a className="carousel-control-prev prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="false"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
        </div> 
        </div>
                
            </div>
        )
    }
}
