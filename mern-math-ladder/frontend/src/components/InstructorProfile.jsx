import React, { Component } from 'react';
import {assignmentCreatedByUser} from './userFunctions'
import {addAssignment} from './userFunctions'

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
    
    render(){
        return (
            
            <div className="container">
              <div className="buttons_center">
                <button onClick = {this.createAssignment.bind(this)} >
                  Create Assignments
                </button>
                <button  onClick = {this.onAssignmentClick.bind(this)}>
                  My Assignments
                </button>
              </div>
              <div>
                <ul>
                  {this.state.assignmentList && this.state.assignmentList.map(function(listValue, i){
                  return <li><a href ={"#/getAssignments/" + listValue._id}>Assignment {i+1}</a></li>;
                  })}         
                </ul>
              </div>
            </div>
        ); 
    }

}

export default InstructorProfile