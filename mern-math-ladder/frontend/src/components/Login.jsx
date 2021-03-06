// Author: Sakshi

import React, { Component } from 'react';
import {login} from './userFunctions'
import { NavLink } from 'react-router-dom'
//import jwt from 'jsonwebtoken'
var jwtDecode = require('jwt-decode');

class Login extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }; 

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        const user ={
            password:this.state.password,
            email:this.state.email
          }

        login(user).then(res => {
            if(res){
                var userDetails = jwtDecode(res);
                console.log(userDetails.educator);
                console.log(userDetails.student);
                if(userDetails.student)
                {
                  this.props.history.push('/landing');
                }
                else 
                {
                  this.props.history.push('/Instructorprofile');
                }
            }
        })  
    }

    render() {
      
      /*

        <NavLink
          exact
          to='/landing'
          activeClassName='PageSwitcher__Item--Active'
          className='PageSwitcher__Item'>
          Home
        </NavLink>
        <NavLink
          exact
          to='/Instructorprofile'
          activeClassName='PageSwitcher__Item--Active'
          className='PageSwitcher__Item'>
          Contact
        </NavLink>
      <div className='App'>
          <div className='App__Form'>
            <NavLink
              exact
              to='/landing'
              activeClassName='PageSwitcher__Item--Active'
              className='PageSwitcher__Item'>
              Home
            </NavLink>
            <NavLink to='/login' activeClassName='PageSwitcher__Item--Active' className='PageSwitcher__Item'>
              Login
            </NavLink>
            <NavLink
              exact
              to='/add'
              activeClassName='PageSwitcher__Item--Active'
              className='PageSwitcher__Item'>
              Register
            </NavLink>
            <NavLink
              exact
              to='/Instructorprofile'
              activeClassName='PageSwitcher__Item--Active'
              className='PageSwitcher__Item'>
              Contact
            </NavLink>
          </div>
        </div> */
        return (
        
          
        
        <div className='App__Form'>
        <div className = 'Align_right1'>
          
        <NavLink to='/' activeClassName='PageSwitcher__Item--Active' className='PageSwitcher__Item'>
          Login
        </NavLink>
        
        <NavLink
          exact
          to='/add'
          activeClassName='PageSwitcher__Item--Active'
          className='PageSwitcher__Item'>
          Register
        </NavLink>
        </div>
        <br></br>
          <div className = 'text-center'><h1>Math Ladder </h1></div>
     
     
            <div className="Relative_position">
              <div className="col-md-6 mt-5 mx-auto">
                <form validate onSubmit={this.onSubmit}>
                  <h1 className="h3 mb-3 font-weight-normal">Please Login</h1>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <div className = "input_width"><input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter email"
                      value={this.state.email}
                      onChange={this.onChange}
                      required = {true}
                      
                    /></div>
                  </div>
                  <div className = "input_width">
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.onChange}
                      required = {true}
                    />
                  </div>
                  </div>
                  <div className = "input_width">
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block">

                    Sign in
                  </button>
                  </div>
                </form>
              </div>
            </div>
            </div>
         
          
          
        )
      }
}

export default Login  