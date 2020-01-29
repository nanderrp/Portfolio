import React, { Component } from 'react';
import './Circle.css';
import { Link } from 'react-router-dom';
import Circle1 from './Img Stuff/Circle1.png';
import Circle2 from './Img Stuff/Circle2.png';
import Circle3 from './Img Stuff/Circle3.png';
import Circle4 from './Img Stuff/Circle4.png';
import Circle5 from './Img Stuff/Circle5.png';
import Circle6 from './Img Stuff/Circle6.png';
import Circle7 from './Img Stuff/Circle7.png';
import Circle8 from './Img Stuff/Circle8.png';
import Circle9 from './Img Stuff/Circle9.png';
import Circle10 from './Img Stuff/Circle10.png';
import Circle11 from './Img Stuff/Circle11.png';
import Circle12 from './Img Stuff/Circle12.png';
import Circle13 from './Img Stuff/Circle13.png';
import Circle15 from './Img Stuff/Circle15.png';
import Circle16 from './Img Stuff/Circle16.png';

export default class Circle extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {
        return (
            <div>
                <div className='Circle container-fluid'> 

                    <Link align="right" className="Circle-exit" to='/' style={{ textDecoration: 'none'}}>&#10005;</Link>


                    <h1 className="Circle-title">Circle Media with Disney</h1>

                        <p className="Circle-blurb">Circle is a device which connects to a router to help parents manage the access 
                         their children have to the wifi.<br/> I created several social media campaigns, print pieces to hand to clients,
                          and other branded collateral.<br/> All artwork and art direction is done by me, the copy was provided!</p>

                
                    
                     <img className="Circle-imgOne" src={ Circle1 } alt="Circle images"></img>
    
    
                    <img className="Circle-imgTwo" src={ Circle2 } alt="Circle images"></img>

                    <img className="Circle-imgSixteen" src={ Circle16 } alt="Circle images"></img>

                    <img className="Circle-imgEight" src={ Circle8 } alt="Circle images"></img>
    
                    <img className="Circle-imgFive" src={ Circle5 } alt="Circle images"></img>
                    <img className="Circle-imgSix" src={ Circle6 } alt="Circle images"></img>
                    <img className="Circle-imgFour" src={ Circle4 } alt="Circle images"></img>
                    <img className="Circle-imgThree" src={ Circle3 } alt="Circle images"></img>
                    
                    
                    
                    <img className="Circle-imgSeven" src={ Circle7 } alt="Circle images"></img>
                    <img className="Circle-imgNine" src={Circle9} alt="Circle images"></img>

                    
                    <img className="Circle-imgTen" src={ Circle10 } alt="Circle images"></img>
                    <img className="Circle-imgEleven" src={ Circle11 } alt="Circle images"></img>
                    
                    <img className="Circle-imgThirteen" src={ Circle13 } alt="Circle images"></img>
                    <img className="Circle-imgFifteen" src={ Circle15 } alt="Circle images"></img>
                    <img className="Circle-imgTwelve" src={ Circle12 } alt="Circle images"></img>
                    
    
</div>
                
            </div>
        )
    }
}
