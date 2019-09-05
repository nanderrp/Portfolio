import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OCSP1 from './Img Stuff/OCSP1.png';
import OCSP2 from './Img Stuff/OCSP2.png';
import OCSP3 from './Img Stuff/OCSP3.png';
import OCSP4 from './Img Stuff/OCSP4.png';
import OCSP5 from './Img Stuff/OCSP5.png';
import OCSP6 from './Img Stuff/OCSP6.png';
import OCSP7 from './Img Stuff/OCSP7.png';
import OCSP8 from './Img Stuff/OCSP8.png';
import OCSP9 from './Img Stuff/OCSP9.png';
import OCSP10 from './Img Stuff/OCSP10.png';
import './OCSP.css';

export default class OCSP extends Component {

    render() {

        return (
            <div>
                <div className='OCSP container-fluid'> 

                <Link align="right" className="OCSP-exit" to='/' style={{ textDecoration: 'none'}}>&#10005;</Link>

                
                        <h1 className="OCSP-title">Friends of the Gorge: Rebrand</h1>

                        <p className="OCSP-blurb">
                        I worked with this brand for over a year at eROI. I took their initial beautiful 
                        branding and expanded upon it, creating various art campaigns and re-purposing their 
                        original graphics to create a consistent and familiar visual brand language. I also 
                        collaborated with a copy writer and strategist on the messaging and direction of each campaign.
                        </p>


                    <img className="OCSP-imgOne" src={OCSP1} alt="OCSP images"></img>
                    
                    
                    <img className="OCSP-imgTwo" src={OCSP2} alt="OCSP images"></img>
                    
                    
                    <img className="OCSP-imgThree" src={OCSP3} alt="OCSP images"></img>
                    <div className="OCSP-link">
                    <p style={{textDecoration: 'underline'}}>www.reallygoodemails.com feature</p>
                    </div>
                    <img className="OCSP-imgFour" src={OCSP4} alt="OCSPimages"></img>

                    <img className="OCSP-imgFive" src={OCSP5} alt="OCSP images"></img>
                    <img className="OCSP-imgSix" src={OCSP6} alt="OCSP images"></img>
                    <img className="OCSP-imgSeven" src={OCSP7} alt="OCSP images"></img>
                    <img className="OCSP-imgEight" src={OCSP8} alt="OCSP images"></img>
                    <img className="OCSP-imgNine" src={OCSP9} alt="OCSP images"></img>
                    <img className="OCSP-imgTen" src={OCSP10} alt="OCSP images"></img>

                </div>
            </div>
        )
    }
}
