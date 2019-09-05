import React, { Component } from 'react';
import Sidebar from './Side Bar/Sidebar';
import About from './About/About';
import BigNames from './Big Names/BigNames';
import Otherstuff from './Other Stuff/Otherstuff.js';
import './Wrapper.css';


export default class Wrapper extends Component {


    render() {

        return (
            <div className='Wrapped'>
               
                   
                    
                
                    <div className="Nested">
                                 
                                <About />
                    
                    
                                <BigNames />
                                
                    
                                <Otherstuff />
                            
                        </div>
                            
        
                         
                           
                      
                   </div>
            
        )
    }
}
