import React, { Component } from 'react';
import {solveAssignmentCreatedByUser} from './userFunctions'
import {addAssignment} from './userFunctions'
import {assignmentCreatedByUser} from './userFunctions'
import {getallAssignments} from './userFunctions'
import { NavLink } from 'react-router-dom'

//import {answerAssignment}from './userFunctions'
var b = [];

class StudentProfile extends Component {

  constructor() {
    super();
    this.state = {
      assignment: [],
      assignmentList: []
    }
  }
  
  handleSelect(id) {
    const { history } = this.props;
    history.push(`/getallAssignments/${id}`);
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
  getallAssignments()
  .then(res => getallAssignments())
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
      
      <NavLink to='/landing' activeClassName='PageSwitcher__Item--Active' className='PageSwitcher__Item'>
        Home
      </NavLink>
      <NavLink to='/Profile' activeClassName='PageSwitcher__Item--Active' className='PageSwitcher__Item'>
        Profile
      </NavLink>
      <NavLink to='/StudentProfile' activeClassName='PageSwitcher__Item--Active' className='PageSwitcher__Item'>
        Assignments
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
      <div className = 'Align_right'>
              <div>

                
                <button  className="Common_button" onClick = {this.onAssignmentClick.bind(this)}>
                  My Assignments
                </button>
               
              </div>
              </div>
              <h1>                              </h1>
             
              <div className = 'Align_right'>
              
              <div>
                <ul className="unorderlist"> 
                  {this.state.assignmentList && this.state.assignmentList.map(function(listValue, i){
                  return <li ><a href ={"#/getAssignmentForStudent/" + listValue._id}>Assignment {i+1}</a><br></br>
                  </li>;
                  })}         
                </ul>
              </div>
              </div>
              </div>
              
            
        ); 
    }

}

export default StudentProfile