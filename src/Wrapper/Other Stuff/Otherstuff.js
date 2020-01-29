import React, { Component } from 'react';
import './Otherstuff.css';
import Logos from './Stuffs/Logos';
import { Link } from 'react-router-dom';



export default class Otherstuff extends Component {
    constructor(props) {
      super(props);
      this.state = {

      isLogoVisible: false }

      this.handleClick = this.handleClick.bind(this);
      
    

  }

    handleClick(e) {
      e.preventDefault();

        this.setState({ isLogoVisible: !this.state.isLogoVisible });

    }


    render() {

    


        return (
          
            <div className="Otherstuff container-fluid"> 
            <p>Other Stuff</p>
                <div className="OtherGrid row">

                <Link to='/Columbia' style={{ textDecoration: 'none'}}>
                  <div className="Item columbia">
                    <h2 style={{textAlign: 'right', paddingTop: '90px'}}>Columbia</h2>
                    </div>
                    </Link>
                  
                    <Link to='/Logos' style={{ textDecoration: 'none'}}>
                    <div className="Item logos">
                    <h2>Logos</h2>
                    </div>
                    </Link>
                  
                  
                  <Link to='/Circle' style={{ textDecoration: 'none'}}>
                  <div className="Item disney">
                      <h2 style={{paddingTop: '50px'}}>Circle <br />with <br />Disney</h2>
                      </div>
                      </Link>
                   
                 
                  <Link to='/Illustrations' style={{ textDecoration: 'none'}}>
                  <div className="Item illustrations" >
                      <h2 style= {{textAlign: 'right', paddingTop: '12vw'}}>Illustrations</h2>
                      </div>
                      </Link>
                      
                 
                  <Link to='/OceansEdge' style={{ textDecoration: 'none'}}>
                    <div className="Item ocean">
                      <h2 style= {{textAlign: 'right', paddingTop: '50px'}}>Ocean's Edge Apparel Design</h2>
                      </div>
                     </Link>
                      
                  
                  <Link to='/Album' style={{ textDecoration: 'none'}}>
                  <div className="Item album" >
                      <h2 style= {{textAlign: 'Left', paddingTop: '9vw', paddingLeft: '30px'}}>Album Cover Design</h2>
                      </div>
                      </Link>
                  
                 
                  <Link to='/Stationary' style={{ textDecoration: 'none'}}>
                  <div className="Item stationary">
                    <h2 style={{textAlign: 'Center'}}>Stationary</h2>
                    </div>
                    </Link>
                  
                  
                  <Link to='/Handlettering' style={{ textDecoration: 'none'}}>
                  <div className="Item handlettering" >
                    <h2 style={{paddingTop: '12.5vw'}}>Handlettering</h2>
                    </div>
                    </Link>
                  
                  
                  <Link to='/Alpenrose' style={{ textDecoration: 'none'}}>
                  <div className="Item alpenrose" >
                    <h2 style={{textAlign: 'right'}}>Alpenrose Dairy: Rebrand</h2>
                    </div>
                    </Link>
                  
                  
                  <Link to='/FriendsoftheGorge' style={{ textDecoration: 'none'}}>
                  <div className="Item friends" >
                    <h2  style={{textAlign: 'right'}}>Friends of<br />the Gorge</h2>
                    </div>
                    </Link>
                  
                  
                  <Link to='/Kids' style={{ textDecoration: 'none'}}>
                  <div className="Item kids" >
                    <h2 style={{paddingTop: '70px'}}>4Kids South Florida</h2>
                    </div>
                    </Link>
                  
                  
                  <Link to='/OCSP' style={{ textDecoration: 'none'}}>
                  <div className="Item college">
                    <h2 style={{textAlign: 'right', paddingTop: '60px'}}>Oregon College Savings Plan</h2>
                    </div>
                    </Link>
                  
                    
                            
                  { this.state.isLogoVisible ? <Logos /> : null }
                </div>
            </div>
            
        )
    }
  }
