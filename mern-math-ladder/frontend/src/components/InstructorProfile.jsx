//Author : Sakshi


import React, { Component } from 'react';
import {assignmentCreatedByUser} from './userFunctions'
import {addAssignment} from './userFunctions'
import { NavLink } from 'react-router-dom'

var b = [];

class InstructorProfile extends Component {

  constructor() {
    super();
    this.state = {
      assignment: [],
      assignmentList: [],
      question: "8 + 1",
      options: ["9","2","1","8"]
    }
  }
  
  handleSelect(id) {
    const { history } = this.props;
    history.push(`/getAssignments/${id}`);
  }

  

  createAssignment() {

    const assignment = {
      question : this.state.question,
      options : this.state.options
    }

    addAssignment(assignment)
    .then(res => {
      if(res)
      {
        alert(res.status);
      }else{
        alert("Some Error occured while creating assignment");
      }
     
      this.setState({
        assignment: res
      });
    });
  }

  
onAssignmentClick() {
  assignmentCreatedByUser()
  .then(res => assignmentCreatedByUser())
  .then(res => {
    this.setState({
      assignmentList: res
    });

    for(var i=1; i<=res.length; i++){
     b.push(i);
    }
  });
}

routeChange() {
  const { history } = this.props;
  history.push('/AddQuestion');
}

    
    render(){
        return (
            
          <div className='App__Form'>
          
          <div className = 'text-center'><h1>Welcome to Math Ladder!! </h1></div>
    <div className = 'Align_right'>
      
      <NavLink to='/Instructorprofile' activeClassName='PageSwitcher__Item--Active' className='PageSwitcher__Item'>
        Home
      </NavLink>
      <NavLink to='/ProfileIns' activeClassName='PageSwitcher__Item--Active' className='PageSwitcher__Item'>
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
              
          <div>
          <div className = 'Align_right'>
                <button className="Common_button" onClick= {this.routeChange.bind(this)}>Create Assignments</button>
                &nbsp;&nbsp;&nbsp;
                <button className="Common_button" onClick= {this.onAssignmentClick.bind(this)}>My Assignments</button>
                
                
          </div>
                
          <div className= "divide"></div>     
               
          <div className='App__Form'>      
          <div>
                <ul>
                  {this.state.assignmentList && this.state.assignmentList.map(function(listValue, i){
                  return <li><a href ={"#/getAssignments/" + listValue._id}>Assignment {i+1}</a><br></br></li>;
                  })}         
                </ul>
                </div>
                </div>
              </div>
              </div>
              
              
            
        ); 
    }

}

export default InstructorProfile