import React, { Component } from 'react';
import {assignmentCreatedByUser} from './userFunctions'

class InstructorProfile extends Component {

  constructor() {
    super();
    this.state = {
      assignment: [],
      assignmentList: []
    }
   // this.assignmentList = [];
    //assignment = {}
    //this.onAssignmentClick = this.onAssignmentClick.bind(this);
  }
  
  handleSelect(id) {
    const { history } = this.props;
    history.push(`/getAssignments/${id}`);
  }


  
onAssignmentClick() {
  assignmentCreatedByUser()
  .then(res => assignmentCreatedByUser())
  .then(res => {
    console.log(res);
    // const assignments = res;
    // this.setState({ assignmentList: assignments})
     this.setState({
       assignmentList: res
     });
     let b = [];
     //this.assignmentList = res;
    //  b = this.state.assignmentList.map(assignment => (
     
    //   r
    //   // <li onClick={() => this.handleSelect(assignment._id)} key={assignment._id}>
    //   //   {assignment.question}
    //   // </li>
    // ));
      console.log(this.assignmentList);
      // this.assignmentList.map(assignment => (

      // ));
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
          {this.state.assignmentList.map(function(listValue){
            return <li><a href ="/">{listValue.question}</a></li>;
          })}
        </ul>

                  </div>
              
              {/* <div className="App"> */}
                {/* {Object.keys(this.state.assignmentList).map((key) => (
                  <div className="container">
                    <span className="left">{key}</span>
                    <span className="right">{this.state.assignmentList[key].question} displayType={'text'} decimalPrecision={2} thousandSeparator={true} prefix={'$'} </span>
                  </div>
                ))}
              </div> */}
            </div>
        ); 
    }

}

export default InstructorProfile