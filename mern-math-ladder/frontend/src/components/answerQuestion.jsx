import React, { Component } from 'react';
import {solveAssignmentCreatedByUser} from './userFunctions'
import {getAssignment} from './userFunctions'
import { NavLink } from 'react-router-dom'
var choices  = [];

class answerQuestion extends Component {

    constructor(){
        super()
        this.state = {
            question: "2 + 3",
            option1: '',
            option2: '',
            option3: '',
            option4: '',
            assignment: [],
            assignmentList: [],
            options: [],
            optionsToDisplay:["5", "4", "3", "2"],
            answer: "5"
        }; 

        var url = window.location.href.split('/');
        var lastSegment = url.pop();
        getAssignment(lastSegment)
        .then(res => {
            console.log("Option 1 :- ",res.options[0].option);
            this.setState({
                assignment:res,
                options: [this.state.option1, this.state.option2, this.state.option3, this.state.option4],
                option1: res.options[0].option,
                option2: res.options[1].option,
                option3: res.options[2].option,
                option4: res.options[3].option 
            })
        })
//  console.log("choices");
//         var choices = this.state.options;
//         console.log(choices);
//         this.state.option1 = choices ? choices[0].option : "Option 1";
//         this.state.option2 = choices ? choices[1].option : "Option 2";
//         this.state.option3 = choices ? choices[2].option : "Option 3";
//         this.state.option4 = choices ? choices[3].option : "Option 4";
        
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
    }

    onSubmit(e) {
        e.preventDefault();
       console.log("state" , this.state.option1);
       var url = window.location.href.split('/');
       var lastSegment = url.pop();
        const assignment = {
            question : this.state.question,
            options :  [this.state.option1, this.state.option2, this.state.option3, this.state.option4],
            answer: this.state.answer,
            parameter: lastSegment
          }
          console.log("call to frontend api");
          console.log(assignment);
          solveAssignmentCreatedByUser(assignment)
          .then(res => {
              console.log("response")
              console.log(res);
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


    routeChange() {
      const { history } = this.props;
      history.push('/AppDragDropDemo');
    }
    routeChange1() {
      const { history } = this.props;
      history.push('/AppDragDropDemo');
    }

    routeChange2() {
      const { history } = this.props;
      history.push('/AppDragDemoGrade3');
    }

    render() {
        //console.log(this.state.options)
        return (
          <div className="App__Form">
            
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
            <div className = 'Align_right'>
            
            <div>
                  <br></br>
                <button className="Common_button" onClick= {this.routeChange2.bind(this)} text-align = "center">Test it yourself for Grade1</button>
                             
                    <div className="divider"></div>
                    
                    <button className="Common_button" onClick= {this.routeChange1.bind(this)}>Test it yourself for Grade3</button>
                                      
                    </div>
                    </div>
                
            <div className="row">
              <div className="col-md-6 mt-5 mx-auto">
                <form validate onSubmit={this.onSubmit}>
                  <div className="form-group">
        <label htmlFor="question"> Question : {this.state.assignment.question}</label>
                    
                  </div>
                  <div className="form-group">
        <label htmlFor="option1"> {this.state.option1} </label>
                    <input
                      type="checkbox"
                      className="check-box"
                      name="option1"
                      placeholder="Option"
                      value={this.state.option1}
                     // onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="option2">{this.state.option2} </label>
                    <input
                      type="checkbox"
                      className="check-box"
                      name="option2"
                      placeholder="Option"
                      value={this.state.option2}
                    //  onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="option3">{this.state.option3}</label>
                    <input
                      type="checkbox"
                      className="check-box"
                      name="option3"
                      placeholder="Option"
                      value={this.state.option3}
                     // onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="option1">{this.state.option4} </label>
                    <input
                      type="checkbox"
                      className="check-box"
                      name="option4"
                      placeholder="Option"
                      value={this.state.option4}
                    //  onChange={this.onChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"
                  >
                   Submit Answer
                  </button>
                </form>
                
              </div>
            </div>
          </div>
        )
      }
}

export default answerQuestion  