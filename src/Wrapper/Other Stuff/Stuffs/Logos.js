import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo1 from './Img Stuff/Logo1.png';
import Logo2 from './Img Stuff/Logo2.png';
import Logo3 from './Img Stuff/Logo3.png';
import './Logos.css';

export default class Logos extends Component {

    render() {

        return (
            <div>
                <div className='Logos container-fluid'> 

                <Link align="right" className="Logos-exit" to='/' style={{ textDecoration: 'none'}}>&#10005;</Link>

                
                        <h1 className="Logos-title">Logos</h1>


                    <img className="Logo-imgOne" src={Logo1} alt="logo images"></img>
                    
                    
                    <img className="Logo-imgTwo" src={Logo2} alt="logo images"></img>
                    
                    
                    <img className="Logo-imgThree" src={Logo3} alt="logo images"></img>
                    
                </div>
            </div>
        )
    }
}
