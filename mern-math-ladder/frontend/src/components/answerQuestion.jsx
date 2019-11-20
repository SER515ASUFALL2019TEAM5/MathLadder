import React, { Component } from 'react';
import {solveAssignmentCreatedByUser} from './userFunctions'
import {getAssignment} from './userFunctions'

class answerQuestion extends Component {

    constructor(){
        super()
        this.state = {
            question: '',
            option1: '',
            option2: '',
            option3: '',
            option4: '',
            assignment: [],
            assignmentList: [],
            options: [],
            answer: ''
        }; 

        var url = window.location.href.split('/');
        var lastSegment = url.pop();
        getAssignment(lastSegment)
        .then(res => {
            this.setState({
                assignment:res,
                options: [res.options[0].option, res.options[1].option, res.options[2].option, res.options[3].option],
                option1: res.options[0].option,
                option2: res.options[1].option,
                option3: res.options[2].option,
                option4: res.options[3].option,
                question: res.question,
                answer: '' 
            })
        })
        
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        if(value === true)
        {
          if(name === 'option1')
          {
              this.setState({
                question : this.state.assignment.question ,
                options :  [this.state.option1, this.state.option2, this.state.option3, this.state.option4],
                answer: this.state.assignment.options[0].option
            })
          }
          if(name === 'option2')
          {
              this.setState({
                question : this.state.assignment.question ,
                options :  [this.state.option1, this.state.option2, this.state.option3, this.state.option4],
                answer: this.state.assignment.options[1].option
            })
          }
          if(name === 'option3')
          {
              this.setState({
                question : this.state.assignment.question ,
                options :  [this.state.option1, this.state.option2, this.state.option3, this.state.option4],
                answer: this.state.assignment.options[2].option
            })
          }
          if(name === 'option4')
          {
              this.setState({
                question : this.state.assignment.question ,
                options :  [this.state.option1, this.state.option2, this.state.option3, this.state.option4],
                answer: this.state.assignment.options[3].option
            })
          }
        }
    }
    
    

    onSubmit(e) {
        e.preventDefault();
       var url = window.location.href.split('/');
       var lastSegment = url.pop();
        const assignment = {
            question : this.state.question,
            options :  [this.state.option1, this.state.option2, this.state.option3, this.state.option4],
            answer: this.state.answer,
            parameter: lastSegment
          }
          solveAssignmentCreatedByUser(assignment)
          .then(res => {
            console.log(res);
            if(res)
            {
              alert("Assignment answered suceessfully");
            }else{
              alert("You have already answered assignment");
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
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5 mx-auto">
                <form validate onSubmit={this.onSubmit}>
                  <div className="form-group">
        <label htmlFor="question"> Question : {this.state.assignment &&  this.state.assignment.question}</label>
                    
                  </div>
                  <div className="form-group">
        <label htmlFor="option1"> {this.state.option1} </label>
                    <input
                      type="checkbox"
                      className="check-box"
                      name="option1"
                      placeholder="Option"
                      value={this.state.option1.value}
                      onChange={this.onChange}
                      checked= {this.state.option1.isChecked}
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
                      onChange={this.onChange}
                      checked= {this.state.option2.isChecked}
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
                      onChange={this.onChange}
                      checked= {this.state.option3.isChecked}
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
                      onChange={this.onChange}
                      checked= {this.state.option4.isChecked}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"
                  >
                   Submit Answer
                  </button>
                </form>
                <button className="button" onClick= {this.routeChange2.bind(this)}>
                                       Test it yourself Grade 1
                    </button>
                    <button className="button" onClick= {this.routeChange1.bind(this)}>
                                        Test it yourself Grade 3
                    </button>
                
              </div>
            </div>
          </div>
        )
      }
}

export default answerQuestion  