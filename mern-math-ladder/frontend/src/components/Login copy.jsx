// Author: Sakshi

import React, { Component } from 'react';
import {login} from './userFunctions'
//import jwt from 'jsonwebtoken'
var jwtDecode = require('jwt-decode');

class Login2 extends Component {
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
                  this.props.history.push('/Studentprofile');
                }
                else 
                {
                  this.props.history.push('/Instructorprofile');
                }
            }
        })  
    }

    render() {
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5 mx-auto">
                <form validate onSubmit={this.onSubmit}>
                  <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter email"
                      value={this.state.email}
                      onChange={this.onChange}
                      required = {true}
                    />
                  </div>
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
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"
                  >
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>
        )
      }
}

export default Login  