// Author: Chandan, Sakshi


import React, { Component } from 'react';
import {getAssignment} from './userFunctions';
import { NavLink } from 'react-router-dom'
var choicesToShow = [];
var answerBy = [];


class question extends Component {

    constructor() {
        super();
        this.state = {
          assignment: [],
          assignmentList: [],
          options: [],
          optionsToDisplay: []
        }
        var url = window.location.href.split('/');
        var lastSegment = url.pop();
        getAssignment(lastSegment)
        .then(res => {
            this.setState({
                assignment:res,
                options: res? res.options : []    
            })
        })
        this.listOptions.bind(this);
      }

      listOptions() 
      {
            var choices = this.state.options;
            choicesToShow = [];
            answerBy = [];
            for(var key in choices) {
              choicesToShow.push(choices[key].option  + " ( Answered By :  " + choices[key].answeredBy + " )");
                answerBy.push(choices[key].answeredBy);
            }
      }

    render(){
        return (
          <div className='App__Form'>
          
          <div className = 'text-center'><h1>Welcome to Math Ladder!! </h1></div>
    <div className = 'Align_right'>
      
      <NavLink to='/Instructorprofile' activeClassName='PageSwitcher__Item--Active' className='PageSwitcher__Item'>
        Home
      </NavLink>
      <NavLink to='/Instructorprofile' activeClassName='PageSwitcher__Item--Active' className='PageSwitcher__Item'>
        My Assignments
      </NavLink>
      <NavLink to='/Profile' activeClassName='PageSwitcher__Item--Active' className='PageSwitcher__Item'>
        Profile
      </NavLink>
      <NavLink to='/StudentView' activeClassName='PageSwitcher__Item--Active' className='PageSwitcher__Item'>
        Student View
      </NavLink>
      
      
      <NavLink
        exact
        to='/Login'
        activeClassName='PageSwitcher__Item--Active'
        className='PageSwitcher__Item'>
        Logout
      </NavLink>
      </div>
      
      <h1>                              </h1> 
      <h1>                              </h1>
      <h1>                              </h1>
            <div className="Common_button3">
               Question :  {this.state.assignment.question} ?
                <ul>
                {this.listOptions()}  
                </ul>
               {choicesToShow.map(movie => (
              <div className="Common_button3">
                {movie}
              </div>
          ))}
            </div>
            </div>
            
        ) 
    }
}

export default question