import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import a from './images/a.jpeg';
import Demo1 from './Demo1';

class Demo extends React.Component {
  render() {
    return (
    
        <div>
      <img src={a}/>  
      <button name="a" value="a">sfsdsd</button>
      <Link to="/Demo1" className="btn btn-link">Register</Link>
      </div>
    
      
    );
  }
}

export default Demo; 
 