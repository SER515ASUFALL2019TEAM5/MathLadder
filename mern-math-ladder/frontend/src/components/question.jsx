import React, { Component } from 'react';
import {getAssignment} from './userFunctions';
var choicesToShow = [];

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
            for(var key in choices) {
                choicesToShow.push(choices[key].option);
            }
      }

    render(){
        return (
            <div className="container">
               Question :  {this.state.assignment.question} ?
                <ul>
                {this.listOptions()}  
                </ul>
               {choicesToShow.map(movie => (
            <div className="card">
              {movie}
            </div>
          ))}
               
               
            </div>
            
        ) 
    }
}

export default question