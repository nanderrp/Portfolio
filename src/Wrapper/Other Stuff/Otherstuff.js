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
                <div className="OtherGrid row">
                  <div className="Item logos" onClick={this.handleClick}>
                    <Link to='/Logos' style={{ textDecoration: 'none'}}>
                    <h2>Logos</h2>
                    </Link>
                  </div>
                  
                  <div className="Item disney">
                  <Link to='/Circle' style={{ textDecoration: 'none'}}>
                      <h2 style={{paddingTop: '50px'}}>Circle <br />with <br />Disney</h2>
                      </Link>
                  </div> 
                 
                  <div className="Item illustrations" >
                  <Link to='/Illustrations' style={{ textDecoration: 'none'}}>
                      <h2 style= {{textAlign: 'right', paddingTop: '125px'}}>Illustrations</h2>
                      </Link>
                      </div>
                  <div className="Item ocean">
                  <Link to='/OceansEdge' style={{ textDecoration: 'none'}}>
                      <h2 style= {{textAlign: 'right', paddingTop: '50px'}}>Ocean's Edge Apparel Design</h2>
                     </Link>
                      </div>
                  <div className="Item album" >
                  <Link to='/Album' style={{ textDecoration: 'none'}}>
                      <h2 style= {{textAlign: 'Left', paddingTop: '90px', paddingLeft: '30px'}}>Album Cover Design</h2>
                      </Link>
                  </div>
                  <div className="Item stationary">
                  <Link to='/Stationary' style={{ textDecoration: 'none'}}>
                    <h2 style={{textAlign: 'Center'}}>Stationary</h2>
                    </Link>
                  </div>
                  <div className="Item handlettering" >
                  <Link to='/Handlettering' style={{ textDecoration: 'none'}}>
                    <h2 style={{paddingTop: '125px'}}>Handlettering</h2>
                    </Link>
                  </div>
                  <div className="Item alpenrose" >
                  <Link to='/Alpenrose' style={{ textDecoration: 'none'}}>
                    <h2 style={{textAlign: 'right'}}>Alpenrose Dairy: Rebrand</h2>
                    </Link>
                  </div>
                  <div className="Item friends" >
                  <Link to='/FriendsoftheGorge' style={{ textDecoration: 'none'}}>
                    <h2  style={{textAlign: 'right'}}>Friends of<br />the Gorge</h2>
                    </Link>
                  </div>
                  <div className="Item kids" >
                  <Link to='/Kids' style={{ textDecoration: 'none'}}>
                    <h2 style={{paddingTop: '70px'}}>4Kids South Florida</h2>
                    </Link>
                  </div>
                  <div className="Item college">
                  <Link to='/OCSP' style={{ textDecoration: 'none'}}>
                    <h2 style={{textAlign: 'right', paddingTop: '60px'}}>Oregon College Savings Plan</h2>
                    </Link>
                  </div>
                    
                            
                  { this.state.isLogoVisible ? <Logos /> : null }
                </div>
            </div>
            
        )
    }
  }
