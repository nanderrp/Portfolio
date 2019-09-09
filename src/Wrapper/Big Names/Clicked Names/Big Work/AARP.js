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

                <div className="Carrousel">
               
             <div id="carouselExampleControls" className="carousel slide" data-interval="4000" data-ride="false">
                <div className="carousel-inner">
                    <div id="carouselItem"className="carousel-item active">
                    <img src={AARP1} className="AARP1 d-block w-80 AARP-img" alt="..." />
                    </div>
                    <div id="carouselItem"className="carousel-item">
                    <img src={AARP2} className="AARP2 d-block w-80 AARP-img" alt="..."/>
                    </div>
                    <div id="carouselItem"className="carousel-item">
                    <img src={AARP3} className="AARP2 d-block w-80 AARP-img" alt="..."/>
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
