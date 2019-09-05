import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Friends1 from './Img Stuff/Friends1.png';
import Friends2 from './Img Stuff/Friends2.png';
import Friends3 from './Img Stuff/Friends3.png';
import Friends4 from './Img Stuff/Friends4.png';
import Friends5 from './Img Stuff/Friends5.png';
import Friends6 from './Img Stuff/Friends6.png';
import Friends7 from './Img Stuff/Friends7.png';
import Friends8 from './Img Stuff/Friends8.png';
import Friends9 from './Img Stuff/Friends9.png';
import Friends10 from './Img Stuff/Friends10.png';
import Friends11 from './Img Stuff/Friends11.png';
import './FriendsoftheGorge.css';

export default class FriendsoftheGorge extends Component {

    render() {

        return (
            <div>
                <div className='Friends container-fluid'> 

                <Link align="right" className="Friends-exit" to='/' style={{ textDecoration: 'none'}}>&#10005;</Link>

                
                        <h1 className="Friends-title">Friends of the Gorge: Rebrand</h1>

                        <p className="Friends-blurb">
                        Friends of the Gorge is a nonprofit organization that is dedicated 
                        to protecting the Columbia River Gorge that is between Oregon and Washington. 
                        They needed a fresh, contemporary brand that would still portray the grandeur 
                        of the landscape they are protecting.
                        </p>


                    <img className="Friends-imgOne" src={Friends1} alt="Friends images"></img>
                    
                    
                    <img className="Friends-imgTwo" src={Friends2} alt="Friends images"></img>
                    
                    
                    <img className="Friends-imgThree" src={Friends3} alt="Friends images"></img>

                    <img className="Friends-imgFour" src={Friends4} alt="Friends images"></img>

                    <img className="Friends-imgFive" src={Friends5} alt="Friends images"></img>
                    <img className="Friends-imgSix" src={Friends6} alt="Friends images"></img>
                    <img className="Friends-imgSeven" src={Friends7} alt="Friends images"></img>
                    <img className="Friends-imgEight" src={Friends8} alt="Friends images"></img>
                    <img className="Friends-imgNine" src={Friends9} alt="Friends images"></img>
                    <img className="Friends-imgTen" src={Friends10} alt="Friends images"></img>
                    <img className="Friends-imgEleven" src={Friends11} alt="Friends images"></img>
                    
                </div>
            </div>
        )
    }
}
