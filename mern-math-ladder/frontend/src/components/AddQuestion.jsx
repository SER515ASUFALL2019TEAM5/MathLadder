import React, { Component } from 'react';
import {addAssignment} from './userFunctions'

class AddQuestion extends Component {
    constructor(){
        console.log("aa");
        super()
        this.state = {
            question: '',
            option1: '',
            option2: '',
            option3: '',
            option4: ''
        }; 

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
        const assignment = {
            question : this.state.question,
            options : [this.state.option1, this.state.option2, this.state.option3, this.state.option4]
          }
          addAssignment(assignment)
          .then(res => {
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

    render() {
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5 mx-auto">
                <form validate onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label htmlFor="question">Question</label>
                    <input
                      type="question"
                      className="form-control"
                      name="question"
                      placeholder="Question"
                      value={this.state.question}
                      onChange={this.onChange}
                      required = {true}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="option1">Option 1 </label>
                    <input
                      type="option1"
                      className="form-control"
                      name="option1"
                      placeholder="Option"
                      value={this.state.option1}
                      onChange={this.onChange}
                      required = {true}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="option2">Option 2 </label>
                    <input
                      type="option2"
                      className="form-control"
                      name="option2"
                      placeholder="Option"
                      value={this.state.option2}
                      onChange={this.onChange}
                      required = {true}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="option3">Option 3 </label>
                    <input
                      type="option3"
                      className="form-control"
                      name="option3"
                      placeholder="Option"
                      value={this.state.option3}
                      onChange={this.onChange}
                      required = {true}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="option1">Option 4 </label>
                    <input
                      type="option4"
                      className="form-control"
                      name="option4"
                      placeholder="Option"
                      value={this.state.option4}
                      onChange={this.onChange}
                      required = {true}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"
                  >
                   Submit Question
                  </button>
                </form>
              </div>
            </div>
          </div>
        )
      }
}

export default AddQuestion  