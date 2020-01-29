import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Album1 from './Img Stuff/Album1.png';
import './Album.css';

export default class Album extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {

        return (
            <div>
                <div className='Album container-fluid'> 

                <Link align="right" className="Album-exit" to='/' style={{ textDecoration: 'none'}}>&#10005;</Link>

                
                        <h1 className="Album-title">Album Cover Design</h1>

                        <p className="Album-blurb">An album cover designed for a church out of Colorado 
                                                   for their new Easter single release.</p>


                    <img className="Album-imgOne" src={Album1} alt="Albumimages"></img>
                    
                    
                </div>
            </div>
        )
    }
}
