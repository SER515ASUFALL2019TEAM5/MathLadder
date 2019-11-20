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
                <h2>Hi Bud !! Welcome to KHILaaa Math Ladder</h2>
                <table>
                  <tr>
                <button className="Common_button" onClick= {this.routeChange2.bind(this)}>
                                         Grade 1
                    </button>
                    </tr>
                    <div className = "divider"/>
                    <tr>
                    <button className="Common_button" onClick= {this.routeChange1.bind(this)}>
                                         Grade 3
                    </button>
                    </tr>
                    </table>

            </div>
        ) 
    }
}

export default Landing