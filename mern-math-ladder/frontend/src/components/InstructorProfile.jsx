import React, { Component } from 'react';
import {assignmentCreatedByUser} from './userFunctions'

class InstructorProfile extends Component {

onAssignmentClick() {
  assignmentCreatedByUser()
  .then(res => {
      this.assignmentList = res;
  });
}
    
    render(){
        return (
            
            <div className="container">
              <div className="buttons_center">
                <button className="button" >
                  Create Assignments
                </button>
                <button  onClick = {this.onAssignmentClick.bind(this)}>
                  My Assignments
                </button>
              </div>
              <div>
                 <ul>        
                    {this.assignmentList}
                 </ul>    
              </div>
            </div>
        ); 
    }

}

export default InstructorProfile