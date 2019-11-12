import React, { Component } from 'react';
import {getAssignment} from './userFunctions';

class question extends Component {

    constructor() {
        super();
        this.state = {
          assignment: [],
          assignmentList: []
        }
        console.log(window.location.href);
        var url = window.location.href.split('/');
        var lastSegment = url.pop();
        console.log(lastSegment);
        getAssignment(lastSegment)
        .then(res => {
            this.setState({
                assignment:res
            })
        })
      }

    render(){
        console.log(this.state.assignment.options);
        return (
            <div className="container">
               Question :  {this.state.assignment.question} ?
               <ul>
                  
               </ul>
            </div>
        ) 
    }
}

export default question