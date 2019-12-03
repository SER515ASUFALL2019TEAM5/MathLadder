// Author: Sakshi


import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

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
          <div className='App__Form'>
          
                <div className = 'text-center'><h1>Welcome to Math Ladder!! </h1></div>
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
            
                <table>
                  <tr>
                <button className="Common_button" onClick= {this.routeChange2.bind(this)}>
                                         Grade 1
                    </button>
                    </tr>
                    <div className = "divider"/>
                    <tr>
                    <button className="Common_button" onClick= {this.routeChange1.bind(this)}>
                                         Grade 2
                    </button>
                    </tr>
                    <div className = "divider"/>
                    <tr>
                    <button className="Common_button" onClick= {this.routeChange1.bind(this)}>
                                         Grade 3
                    </button>
                    </tr>
                    <div className = "divider"/>
                    <tr>
                    <button className="Common_button" onClick= {this.routeChange1.bind(this)}>
                                         Grade 4
                    </button>
                    </tr>
                    <div className = "divider"/>
                    <tr>
                    <button className="Common_button" onClick= {this.routeChange1.bind(this)}>
                                         Grade 5
                    </button>
                    </tr>
                    <div className = "divider"/>
                    <tr>
                    <button className="Common_button" onClick= {this.routeChange1.bind(this)}>
                                         Grade 6
                    </button>
                    </tr>
                    <div className = "divider"/>
                    <tr>
                    <button className="Common_button" onClick= {this.routeChange1.bind(this)}>
                                         Grade 7
                    </button>
                    </tr>
                    <div className = "divider"/>
                    <tr>
                    <button className="Common_button" onClick= {this.routeChange1.bind(this)}>
                                         Grade 8
                    </button>
                    </tr>
                    <div className = "divider"/>
                    <tr>
                    <button className="Common_button" onClick= {this.routeChange1.bind(this)}>
                                         Grade 9
                    </button>
                    </tr>
                    <div className = "divider"/>
                    <tr>
                    <button className="Common_button" onClick= {this.routeChange1.bind(this)}>
                                         Grade 10
                    </button>
                    </tr>
                    </table>
            </div>
            
        ) 
    }
}

export default Landing