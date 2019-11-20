import React, { Component } from 'react';
import {register} from './userFunctions'

class Register extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
            username: '',
            educator: false,
            student: false,
            hasAgreed: false
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
            username: this.state.username,
            password:this.state.password,
            email:this.state.email,
            status: "active",
            educator: this.state.educator,
            student: this.state.student
          }

        register(user).then(res => {
            if(res.status === 200)
              this.props.history.push('/login');
        })  
    }

    render() {
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5 mx-auto">
                <form validate onSubmit={this.onSubmit}>
                  <h1 className="h3 mb-3 font-weight-normal">Please sign Up </h1>
                  <div className="form-group">
                  <label htmlFor="username">Enter your full name</label>
                    <input
                      type="string"
                      className="form-control"
                      name="username"
                      placeholder="Enter your name"
                      value={this.state.username}
                      onChange={this.onChange}
                      required = {true}
                    />
                   </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="string"
                      className="form-control"
                      name="email"
                      placeholder="Enter email"
                      value={this.state.email}
                      required = {true}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="string"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.onChange}
                      required = {true}
                    />
                  </div>
                  <div className="form-group">
                  <label htmlFor="educator">
                    <input
                      type="checkbox"
                      className="FormField__Checkbox"
                      name="educator"
                      value={this.state.educator}
                      onChange={this.onChange}
                    />*I am an Educator</label>
                    </div>
                    <div className="form-group">
                    <label htmlFor="student">
                    
                    
                    <input
                      type="checkbox"
                      className="FormField__Checkbox"
                      name="student"
                      value={this.state.student}
                      onChange={this.onChange}
                      
                    /> *I am a Student </label>
                  </div>
                  <button type="submit" className="btn btn-lg btn-primary btn-block">
                      Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        )
      }
}

export default Register