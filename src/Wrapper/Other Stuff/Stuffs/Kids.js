import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Kids1 from './Img Stuff/Kids1.png';
import Kids2 from './Img Stuff/Kids2.png';
import Kids3 from './Img Stuff/Kids3.png';
import Kids4 from './Img Stuff/Kids4.png';
import Kids5 from './Img Stuff/Kids5.png';
import './Kids.css';

export default class Kids extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {

        return (
            <div>
                <div className='Kids container-fluid'> 

                <Link align="right" className="Kids-exit" to='/' style={{ textDecoration: 'none'}}>&#10005;</Link>

                
                        <h1 className="Kids-title">4Kids South Florida</h1>


                    <img className="Kids-imgOne" src={Kids1} alt="Kids images"></img>
                    
                    
                    <img className="Kids-imgTwo" src={Kids2} alt="Kids images"></img>
                    
                    
                    <img className="Kids-imgThree" src={Kids3} alt="Kids images"></img>

                    <img className="Kids-imgFour" src={Kids4} alt="Kids images"></img>

                    <img className="Kids-imgFive" src={Kids5} alt="Kids images"></img>
                    
                </div>
            </div>
        )
    }
}
