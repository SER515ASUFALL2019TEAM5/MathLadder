import React, { Component } from 'react';
import {solveAssignmentCreatedByUser} from './userFunctions'
import {addAssignment} from './userFunctions'
import {assignmentCreatedByUser} from './userFunctions'
import {getallAssignments} from './userFunctions'

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
            
            <div className="container">
              <div className="buttons_center">
                
                <button  onClick = {this.onAssignmentClick.bind(this)}>
                  My Assignments
                </button>
              </div>
              <div>
                <ul className="unorderlist"> 
                  {this.state.assignmentList && this.state.assignmentList.map(function(listValue, i){
                  return <li><a href ={"#/getAssignmentForStudent/" + listValue._id}>Assignment {i+1}</a>
                  </li>;
                  })}         
                </ul>
              </div>
            </div>
        ); 
    }

}

export default StudentProfile