import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Password from '../Password';
import './UnderArmour.css';
import Under1 from './Big Images/Under1.png';
import Under2 from './Big Images/Under2.png';
import Under3 from './Big Images/Under3.png';
import Under4 from './Big Images/Under4.png';
import Under5 from './Big Images/Under5.png';


export default class Adobe extends Component {

    photos = [{Under1}, {Under2}, {Under3}, {Under4}, {Under5}]

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }

        this.handleClick = this.handleClick.bind(this)
        this.toggleNext = this.toggleNext.bind(this)
    }



    handleClick(event) {
        event.preventDefault()
    
        this.setState(prevState => ({
          visible: !prevState.visible,
        }))
      }

    src = this.props.photos

    toggleNext() {
        
    }


    render() {

    
    
        return (
            <div className="UnderArmour container-fluid">
                <Password />
                <Link align="right" className="Logos-exit" to='/' style={{ textDecoration: 'none'}}>&#10005;</Link>

                <h1 className="Under-title">
                    Under Armour: Campaign and Newsletter Emails
                </h1>

                <div className="Carrousel">
               
             <div id="carouselExampleControls" className="carousel slide" data-interval="4000" data-ride="false">
                <div className="carousel-inner">
                    <div id="carouselItem"className="carousel-item active">
                    <img src={Under1} className="Under1 d-block w-100 UnderArmour-img" alt="..." />
                    </div>
                    <div id="carouselItem"className="carousel-item">
                    <img src={Under2} className="Under2 d-block w-100 UnderArmour-img" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={Under3} className="Under3 d-block w-100 UnderArmour-img" alt="..."/>
                    </div>
                    <div id="carouselItem"className="carousel-item">
                    <img src={Under4} className="Under4 d-block w-100 UnderArmour-img" alt="..."/>
                    </div>
                    <div id="carouselItem"className="carousel-item">
                    <img src={Under5} className="Under5 d-block w-100 UnderArmour-img" alt="..."/>
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
