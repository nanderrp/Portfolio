import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Password from '../Password';
import './Hyatt.css';
import Hyatt1 from './Big Images/Hyatt1.png';
import Hyatt2 from './Big Images/Hyatt2.png';

export default class Hyatt extends Component {
    render() {
        return (
            <div className="Hyatt container-fluid">
                <Password />
                <Link align="right" className="Hyatt-exit" to='/' style={{ textDecoration: 'none'}}>&#10005;</Link>

                <h1 className="Hyatt-title">
                    Hyatt: Mobile Check-in
                </h1>

                <div className="Carrousel">
               
             <div id="carouselExampleControls" className="carousel slide" data-interval="4000" data-ride="false">
                <div className="carousel-inner">
                    <div id="carouselItem"className="carousel-item active">
                    <img src={Hyatt1} className="Hyatt1 d-block w-100 Hyatt-img" alt="..." />
                    </div>
                    <div id="carouselItem"className="carousel-item">
                    <img src={Hyatt2} className="Hyatt2 d-block w-100 Hyatt-img" alt="..."/>
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
