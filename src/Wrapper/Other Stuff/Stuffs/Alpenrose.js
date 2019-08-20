import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Alpenrose1 from './Img Stuff/Alpenrose1.png';
import Alpenrose2 from './Img Stuff/Alpenrose2.png';
import Alpenrose3 from './Img Stuff/Alpenrose3.png';
import Alpenrose4 from './Img Stuff/Alpenrose4.png';
import Alpenrose5 from './Img Stuff/Alpenrose5.png';
import Alpenrose6 from './Img Stuff/Alpenrose6.png';
import Alpenrose7 from './Img Stuff/Alpenrose7.png';
import Alpenrose8 from './Img Stuff/Alpenrose8.png';
import Alpenrose9 from './Img Stuff/Alpenrose9.png';
import Alpenrose10 from './Img Stuff/Alpenrose10.png';
import Alpenrose11 from './Img Stuff/Alpenrose11.png';
import Alpenrose12 from './Img Stuff/Alpenrose12.png';
import Alpenrose13 from './Img Stuff/Alpenrose13.png';
import Alpenrose14 from './Img Stuff/Alpenrose14.png';
import Alpenrose15 from './Img Stuff/Alpenrose15.png';
import Alpenrose16 from './Img Stuff/Alpenrose16.png';
import './Alpenrose.css';

export default class Alpenrose extends Component {

    render() {

        return (
            <div>
                <div className='Alpenrose container-fluid'> 

                <Link align="right" className="Alpenrose-exit" to='/' style={{ textDecoration: 'none'}}>&#10005;</Link>

                
                        <h1 className="Alpenrose-title">Alpenrose Dairy: Rebrand</h1>


                    <img className="Alpenrose-imgOne" src={Alpenrose1} alt="Alpenrose images"></img>
                    
                    
                    <img className="Alpenrose-imgTwo" src={Alpenrose2} alt="Alpenrose images"></img>
                    
                    
                    <img className="Alpenrose-imgThree" src={Alpenrose3} alt="Alpenrose images"></img>

                    <img className="Alpenrose-imgFour" src={Alpenrose4} alt="Alpenrose images"></img>

                    <img className="Alpenrose-imgFive" src={Alpenrose5} alt="Alpenrose images"></img>
                    <img className="Alpenrose-imgSix" src={Alpenrose6} alt="Alpenrose images"></img>
                    <img className="Alpenrose-imgSeven" src={Alpenrose7} alt="Alpenrose images"></img>
                    <img className="Alpenrose-imgEight" src={Alpenrose8} alt="Alpenrose images"></img>
                    <img className="Alpenrose-imgNine" src={Alpenrose9} alt="Alpenrose images"></img>
                    <img className="Alpenrose-imgTen" src={Alpenrose10} alt="Alpenrose images"></img>
                    <img className="Alpenrose-imgEleven" src={Alpenrose11} alt="Alpenrose images"></img>
                    <img className="Alpenrose-imgTwelve" src={Alpenrose12} alt="Alpenrose images"></img>
                    <img className="Alpenrose-imgThirteen" src={Alpenrose13} alt="Alpenrose images"></img>
                    <img className="Alpenrose-imgFourteen" src={Alpenrose14} alt="Alpenrose images"></img>
                    <img className="Alpenrose-imgFifteen" src={Alpenrose15} alt="Alpenrose images"></img>
                    <img className="Alpenrose-imgSixteen" src={Alpenrose16} alt="Alpenrose images"></img>
                    
                </div>
            </div>
        )
    }
}