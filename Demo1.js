import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';

import Demo from './Demo';
class Demo1 extends React.Component {
  render() {
    return (
    <div>
        
      <button name="a" value="a">sfsdsd</button>
      <Link to="/" className="btn btn-link">Register</Link>
      </div>
    
      
    );
  }
}


export default Demo1;
 