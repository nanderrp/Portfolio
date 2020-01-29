import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Stationary1 from './Img Stuff/Stationary1.png';
import Stationary2 from './Img Stuff/Stationary2.png';
import Stationary3 from './Img Stuff/Stationary3.png';
import Stationary4 from './Img Stuff/Stationary4.png';
import Stationary5 from './Img Stuff/Stationary5.png';
import './Stationary.css';

export default class Stationary extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {

        return (
            <div>
                <div className='Stationary container-fluid'> 

                <Link align="right" className="Stationary-exit" to='/' style={{ textDecoration: 'none'}}>&#10005;</Link>

                
                        <h1 className="Stationary-title">Stationary</h1>


                    <img className="Stationary-imgOne" src={Stationary1} alt="Stationary images"></img>
                    
                    
                    <img className="Stationary-imgTwo" src={Stationary2} alt="Stationary images"></img>
                    
                    
                    <img className="Stationary-imgThree" src={Stationary3} alt="Stationary images"></img>

                    <img className="Stationary-imgFour" src={Stationary4} alt="Stationary images"></img>

                    <img className="Stationary-imgFive" src={Stationary5} alt="Stationary images"></img>
                    
                </div>
            </div>
        )
    }
}
