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
                
                <div className="Carrousel">
               
               <div id="carouselExampleControls" className="carousel slide" data-interval="4000" data-ride="false">
                  <div className="carousel-inner">
                      <div id="carouselItem"className="carousel-item active">
                      <img src={Capital1} className="Capital1 d-block w-100 Capital-img" alt="..." />
                      </div>
                      <div id="carouselItem"className="carousel-item">
                      <img src={Capital2} className="Capital2 d-block w-100 Capital-img" alt="..."/>
                      </div>
                      <div className="carousel-item">
                      <img src={Capital3} className="Capital3 d-block w-100 Capital-img" alt="..."/>
                      </div>
                      <div id="carouselItem"className="carousel-item">
                      <img src={Capital4} className="Capital4 d-block w-100 Capital-img" alt="..."/>
                      </div>
                      <div id="carouselItem"className="carousel-item">
                      <img src={Capital5} className="Capital5 d-block w-100 Capital-img" alt="..."/>
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
