import React, { Component } from 'react';
import './Otherstuff.css';
import Logo from './Images/logos.png';
import Circle from './Images/ausad-r-2-2-e.png';
import Arthur from './Images/arthur.png';
import Cover from './Images/cover-oe.png';
import Cd from './Images/cd.png';
import Kelsey from './Images/kelseyinvite.png';
import Handlettering from './Images/i-3.png';
import Alpenrose from './Images/final-pierpoint.png';
import Gorge from './Images/gorge.png';
import Kids from './Images/4Kids.png';
import College from './Images/college.png';


export default class Otherstuff extends Component {
    constructor(props) {
      super(props);
      this.state = {
       images: [
        {id: 1, src: Logo},
        {id: 2, src: Circle},
        {id: 3, src: Arthur},
        {id: 4, src: Cover},
        {id: 5, src: Cd},
        {id: 6, src: Kelsey},
        {id: 7, src: Handlettering},
        {id: 8, src: Alpenrose},
        {id: 9, src: Gorge},
        {id: 10, src: Kids},
        {id: 11, src: College},]
    }
  }

      onHover() {
    
    } 


    render() {

    


        return (
            <div className="Otherstuff container-fluid">
                <div className="OtherGrid row">
                  <div className="Item logos" >
                    <h2>Logos</h2>
                  </div>
                  <div className="Item disney">
                   
                      <h2 style={{paddingTop: '50px'}}>Circle <br />with <br />Disney</h2>
                  </div> 
                  <div className="Item illustrations" >
                  
                      <h2 style= {{textAlign: 'right', paddingTop: '140px'}}>Illustrations</h2>
                      </div>
                  <div className="Item ocean">
                  
                      <h2 style= {{textAlign: 'right', paddingTop: '50px'}}>Ocean's Edge Apparel Design</h2>
                      </div>
                  <div className="Item album" >
                  
                      <h2 style= {{textAlign: 'Left', paddingTop: '90px', paddingLeft: '30px'}}>Album Cover Design</h2>
                  </div>
                  <div className="Item stationary" s>
                 
                    <h2 style={{textAlign: 'Center'}}>Stationary</h2>
                  </div>
                  <div className="Item handlettering" >
                  
                    <h2 style={{paddingTop: '140px'}}>Handlettering</h2>
                  </div>
                  <div className="Item alpenrose" >
                  
                    <h2 style={{textAlign: 'right'}}>Alpenrose Dairy: Rebrand</h2>
                  </div>
                  <div className="Item friends" >
                  
                    <h2  style={{textAlign: 'right'}}>Friends of<br />the Gorge</h2>
                  </div>
                  <div className="Item kids" >
                    <h2 style={{paddingTop: '70px'}}>4Kids South Florida</h2>
                  </div>
                  <div className="Item college">
                    <h2 style={{textAlign: 'right', paddingTop: '60px'}}>Oregon College Savings Plan</h2>
                  </div>
                    
                            
                    
                </div>
            </div>
        )
    }
}
