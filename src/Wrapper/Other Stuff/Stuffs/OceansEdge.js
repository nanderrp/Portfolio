import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Ocean1 from './Img Stuff/Ocean1.png';
import Ocean2 from './Img Stuff/Ocean2.png';
import Ocean3 from './Img Stuff/Ocean3.png';
import './OceansEdge.css';

export default class OceansEdge extends Component {

    render() {

        return (
            <div>
                <div className='OceansEdge container-fluid'> 

                <Link align="right" className="OceansEdge-exit" to='/' style={{ textDecoration: 'none'}}>&#10005;</Link>

                
                        <h1 className="OceansEdge-title">Ocean's Edge: Apparel Design</h1>


                    <img className="OceansEdge-imgOne" src={Ocean1} alt="OceansEdge images"></img>
                    
                    
                    <img className="OceansEdge-imgTwo" src={Ocean2} alt="OceansEdge images"></img>
                    
                    
                    <img className="OceansEdge-imgThree" src={Ocean3} alt="OceansEdge images"></img>
                    
                </div>
            </div>
        )
    }
}
