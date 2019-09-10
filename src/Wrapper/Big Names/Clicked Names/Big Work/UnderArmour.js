import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Password from '../Password';
import './UnderArmour.css';
import Under1 from './Big Images/Under1.png';
import Under2 from './Big Images/Under2.png';
import Under3 from './Big Images/Under3.png';
import Under4 from './Big Images/Under4.png';
import Under5 from './Big Images/Under5.png';


export default class Adobe extends Component {

    photos = [{Under1}, {Under2}, {Under3}, {Under4}, {Under5}]

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }

        this.handleClick = this.handleClick.bind(this)
        this.toggleNext = this.toggleNext.bind(this)
    }



    handleClick(event) {
        event.preventDefault()
    
        this.setState(prevState => ({
          visible: !prevState.visible,
        }))
      }

    src = this.props.photos

    toggleNext() {
        
    }


    render() {

    
    
        return (
            <div className="UnderArmour container-fluid">
                <Password />
                <Link align="right" className="Under-exit" to='/' style={{ textDecoration: 'none'}}>&#10005;</Link>

                <h1 className="Under-title">
                    Under Armour: Campaign and Newsletter Emails
                </h1>

                <div className="UnderArmour-img">
               
             
                    
                    <img src={Under1} className="Under1" alt="..." />
                    
                    
                    <img src={Under2} className="Under2" alt="..."/>
                    
                    <img src={Under3} className="Under3" alt="..."/>
                    
                    <img src={Under4} className="Under4" alt="..."/>
                    
                    <img src={Under5} className="Under5" alt="..."/>
                    
                
                </div> 
                </div>
        )
    }
}
