import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Password from '../Password';
import './Thesis.css';
import Thesis1 from './Big Images/Thesis1.png';
import Thesis2 from './Big Images/Thesis2.mp4';
import Thesis3 from './Big Images/Thesis3.png';
import Thesis4 from './Big Images/Thesis4.png';
import Thesis5 from './Big Images/Thesis5.png';
import Thesis6 from './Big Images/Thesis6.png';
import Thesis7 from './Big Images/Thesis7.png';
import Thesis8 from './Big Images/Thesis8.gif';
import Thesis9 from './Big Images/Thesis9.png';


export default class Thesis extends Component {
    render() {
        return (
            <div className="Thesis container-fluid">
                 <Password />
                <Link align="right" className="Thesis-exit" to='/' style={{ textDecoration: 'none'}}>&#10005;</Link>
                <h1 className="Thesis-title">
                    Thesis Website Design
                </h1>

            <div className="Carrousel">
               
               <div id="carouselExampleControls" className="carousel slide" data-interval="4000" data-ride="false">
                  <div className="carousel-inner">
                      <div id="carouselItem"className="carousel-item active">
                      <img src={Thesis1} className="Thesis1 d-block w-100 Capital-img" alt="..." />
                      </div>
                      <div id="carouselItem"className="carousel-item">
                      <video src={Thesis2} width="210px" autoplay="true" loop="true" className="Thesis2 d-block w-100 Thesis-img" alt="..."/>
                      </div>
                      <div className="carousel-item">
                      <img src={Thesis3} className="Thesis3 d-block w-100 Thesis-img" alt="..."/>
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

                <h1 className="Thesis-title">
                    The Process
                </h1>

                <img className="Thesis-img" src={Thesis4} alt='Thesis Mock up'></img>
                
                 
                <img className="Thesis-img" src={Thesis5} alt='Thesis Mock up'></img>
                <img className="Thesis-img" src={Thesis6} alt='Thesis Mock up'></img>
                <img className="Thesis-img" src={Thesis7} alt='Thesis Mock up'></img>
                <img className="Thesis-img" src={Thesis8} alt='Thesis Mock up'></img>
                <img className="Thesis-img" src={Thesis9} alt='Thesis Mock up'></img>
                
                
            </div>
        )
    }
}
