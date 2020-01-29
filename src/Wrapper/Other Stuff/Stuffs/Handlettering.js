import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Handlettering1 from './Img Stuff/Handlettering1.png';
import Handlettering2 from './Img Stuff/Handlettering2.png';
import Handlettering3 from './Img Stuff/Handlettering3.png';
import Handlettering4 from './Img Stuff/Handlettering4.png';
import Handlettering5 from './Img Stuff/Handlettering5.png';
import Handlettering6 from './Img Stuff/Handlettering6.png';
import Handlettering7 from './Img Stuff/Handlettering7.png';
import Handlettering8 from './Img Stuff/Handlettering8.png';
import Handlettering9 from './Img Stuff/Handlettering9.png';
import Handlettering10 from './Img Stuff/Handlettering10.png';
import './Handlettering.css';

export default class Handlettering extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {

        return (
            <div>
                <div className='Handlettering container-fluid'> 

                <Link align="right" className="Handlettering-exit" to='/' style={{ textDecoration: 'none'}}>&#10005;</Link>

                
                        <h1 className="Handlettering-title">Handlettering</h1>

                        <p className="Handlettering-blurb">
                        I've been handlettering since 2013. 
                        It's a beautiful blend of illustration and design with a focus on typography. 
                        This skill translates into any sort of digital typography I do, as sketching each letterform 
                        teaches me every nook and curve of its shape. Below is an array of pieces I've 
                        done for practice or for fun. I do not claim ownership for copy &amp; quotes.
                        </p>


                    <img className="Handlettering-imgOne" src={Handlettering1} alt="Handlettering images"></img>
                    
                    
                    <img className="Handlettering-imgTwo" src={Handlettering2} alt="Handlettering images"></img>
                    
                    
                    <img className="Handlettering-imgThree" src={Handlettering3} alt="Handlettering images"></img>

                    <img className="Handlettering-imgFour" src={Handlettering4} alt="Handlettering images"></img>

                    <img className="Handlettering-imgFive" src={Handlettering5} alt="Handlettering images"></img>
                    <img className="Handlettering-imgFive" src={Handlettering6} alt="Handlettering images"></img>
                    <img className="Handlettering-imgFive" src={Handlettering7} alt="Handlettering images"></img>
                    <img className="Handlettering-imgFive" src={Handlettering8} alt="Handlettering images"></img>
                    <img className="Handlettering-imgFive" src={Handlettering9} alt="Handlettering images"></img>
                    <img className="Handlettering-imgFive" src={Handlettering10} alt="Handlettering images"></img>
                    
                </div>
            </div>
        )
    }
}
