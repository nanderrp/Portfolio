import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Columbia1 from './Img Stuff/Columbia1.png';
import Columbia2 from './Img Stuff/Columbia2.png';
import Columbia3 from './Img Stuff/Columbia3.png';
import Columbia4 from './Img Stuff/Columbia4.png';
import Columbia5 from './Img Stuff/Columbia5.png';
import Columbia6 from './Img Stuff/Columbia6.png';
import './Columbia.css';


export default class Columbia extends Component {
    render() {
        return (
                <div>
                <div className='Columbia container-fluid'> 

                    <Link align="right" className="Circle-exit" to='/' style={{ textDecoration: 'none'}}>&#10005;</Link>


                    <h1 className="Columbia-title">Columbia Sportswear: Art Direction</h1>

                        <p className="Columbia-blurb">I directed this concept for the annual We Heart our Members campaign for the loyalty members team.
                        <br/> Photographer & Design Help: Colin Hofman.</p>

                <div>

                <img className="Columbia-imgOne" src={ Columbia1 } alt="Columbia images"></img>
                    
                     <img className="Columbia-imgTwo" src={ Columbia2 } alt="Columbia images"></img>

                    <img className="Columbia-imgThree" src={ Columbia3 } alt="Columbia images"></img>

                    <img className="Columbia-imgFour" src={ Columbia4 } alt="Columbia images"></img>
    
                    <img className="Columbia-imgFive" src={ Columbia5 } alt="Columbia images"></img>
                    <img className="Columbia-imgSix" src={ Columbia6 } alt="Columbia images"></img>
                    
            
                    </div>
                </div>
                
            </div>
        )
    }
}
