import React, { Component } from 'react';
import './Password.css';
import {Link} from 'react-router-dom';


class Password extends Component {
  static defaultProps = {
    password: 'pierpoint'
  }

  constructor(props) {
      super(props)
  
      this.state = {
        visible: true,
        value: ''
      }
        
      
      
      
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      
    }

      handleChange(e) {    
        e.preventDefault();      
        this.setState({value: e.target.value});
    }

      handleSubmit(e) {
        e.preventDefault();
        if(this.state.value === this.props.password) {
          this.setState({visible: false});
        } else {
          alert('Incorrect Password!'); 
        }
      }

    
    render() {
        if (!this.state.visible) {
        return null; 
      };
          
        return (

            <div className="pwd">

                <div className="enter-pwd">
                <Link className='exit' to='/'> &#10005; </Link>
                    <form onSubmit={this.handleSubmit}>
                    
                    <input 
                     className="sub-text"
                     type='password'
                     name='password' 
                     placeholder='Enter password' 
                     value={this.state.value}
                     onChange={this.handleChange}>
                     </input>
                     <button
                     className="sub-mit"
                     type='submit'>
                       submit
                     </button>
                    
                    </form> 
                </div>
               
            </div>
        )
    }
  }

export default Password