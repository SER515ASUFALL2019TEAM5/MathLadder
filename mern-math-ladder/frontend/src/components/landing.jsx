import React, { Component } from 'react';

class Landing extends Component {

    routeChange1() {
        const { history } = this.props;
        history.push('/AppDragDropDemo');
      }

      routeChange2() {
        const { history } = this.props;
        history.push('/AppDragDemoGrade3');
      }



    render(){
        return (

            

            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                            Welcome To MathLadder :)
                    </div>
                </div>
                <button className="button" onClick= {this.routeChange2.bind(this)}>
                                         Grade 1
                    </button>
                    <button className="button" onClick= {this.routeChange1.bind(this)}>
                                         Grade 3
                    </button>

            </div>
        ) 
    }
}

export default Landing