import React, { Component } from 'react';
import './Illustrations.css';
import { Link } from 'react-router-dom';
import Illustration1 from './Img Stuff/Illustration1.png';
import Illustration2 from './Img Stuff/Illustration2.png';
import Illustration3 from './Img Stuff/Illustration3.png';
import Illustration4 from './Img Stuff/Illustration4.png';
import Illustration5 from './Img Stuff/Illustration5.png';
import Illustration6 from './Img Stuff/Illustration6.png';
import Illustration7 from './Img Stuff/Illustration7.png';
import Illustration8 from './Img Stuff/Illustration8.png';


export default class Illustrations extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {
        return (
            <div>
                <div className='Illustrations'> 

                    <Link align="right" className="Illustrations-exit" to='/' style={{ textDecoration: 'none'}}>&#10005;</Link>


                    <h1 className="Illustrations-title">Illustrations</h1>

                
                    
                    <img className="Illustrations-imgOne" src={ Illustration1 } alt="Illustrations images"></img>

                    <img className="Illustrations-imgTwo" src={ Illustration2 } alt="Illustrations images"></img>

                    <img className="Illustrations-imgThree mobile" src={ Illustration3 } alt="Illustrations images"></img>

                    <img className="Illustrations-imgFour mobile" src={ Illustration4 } alt="Illustrations images"></img>
    
                    <img className="Illustrations-imgFive mobile" src={ Illustration5 } alt="Illustrations images"></img>
                    <img className="Illustrations-imgSix mobile" src={ Illustration6 } alt="Illustrations images"></img>
                    <img className="Illustrations-imgSeven mobile" src={ Illustration7 } alt="Illustrations images"></img>
                    <img className="Illustrations-imgEight mobile" src={ Illustration8 } alt="Illustrations images"></img>
    
                </div>
                
            </div>
        )
    }
}

