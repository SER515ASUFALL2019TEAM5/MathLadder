import React, { Component } from 'react';
import axios from 'axios';

class SignUpForm extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            email: '',
            password: '',
            username: '',
            educator: true,
            student: false,
            hasAgreed: false
        };
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        document.getElementById("create-signup-form").reset();
        const user ={
          username: this.state.username,
          password:this.state.password,
          email:this.state.email,
          status: "active",
          educator: this.state.educator,
          student: this.state.student
        }
        axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data));
        window.location.href = "http://localhost:3000/#/react-auth-ui/sign-in"
    }

    render() {
        return (
        <div classusername="FormCenter">
            <form id = "create-signup-form" onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="username">Full Name</label>
                <input type="text" id="username" className="FormField__Input" placeholder="Enter your full name" name="username" required = {true} value={this.state.username} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" required = {true} value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" required = {true} value={this.state.email} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="educator" value={this.state.educator} onChange={this.handleChange} />I am an Educator</label>
              </div>
              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="student" value={this.state.student} onChange={this.handleChange} />I am an Student</label>
              </div>
              <div className="FormField">
                  <button className="FormField__Button mr-20" onChange={this.handleSubmit} >Sign Up</button> 
              </div>
            </form>
          </div>
        );
    }
}

export default SignUpForm;