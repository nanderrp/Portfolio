import React, { Component } from 'react';
import './Adobe.css';
import Adobe1 from './mockup-1.png';
import Adobe2 from './mockup-2.png';

export default class Adobe extends Component {


    constructor(props) {
        super(props);
        this.state = {
            visible: true
        }

        this.handleClick = this.handleClick.bind(this)
    }



    handleClick(event) {
        event.preventDefault()
    
        this.setState(prevState => ({
          visible: !prevState.visible,
        }))
      }

    render() {
        return (
            <div className="Adobe">
                <button onClick={this.handleClick}> &#10005; </button>

                <h1 className="Adobe-title">
                    Adobe Creative Cloud: App Banner
                </h1>
                <h3 className="Adobe-desc">
                “Image curation for an app banner. Done with lots of hard work skill and talent. Here below are the images that prove I did the work.”
                </h3>
                <div className="images">
                <div className="Adobe-mockup1">
                <img src={Adobe1} alt='Adobe Mock up'></img>
                </div>
                <div className="Adobe-mockup2">
                <img src={Adobe2} alt='Adobe Mock up'></img>
                </div>
                </div>
            </div>
        )
    }
}
