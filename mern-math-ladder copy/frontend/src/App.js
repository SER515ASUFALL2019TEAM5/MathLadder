import './App.css'
import React, { Component } from 'react'

import { HashRouter as Router, Route, NavLink } from 'react-router-dom'
import Navbar from './components/NavBar'
import Landing from './components/landing'
import Login from './components/Login'
import Register from './components/register'
import InstructorProfile from './components/InstructorProfile'
import question from './components/question'
import AddQuestion from './components/AddQuestion'

class App extends Component {
  render () {
    return (
      <Router basename='/react-auth-ui/'>
        <div className='App'>
          <div className='App__Form'>
            <NavLink
              exact
              to='/add'
              activeClassName='PageSwitcher__Item--Active'
              className='PageSwitcher__Item'>
              Home
            </NavLink>
            <NavLink to='/login' activeClassName='PageSwitcher__Item--Active' className='PageSwitcher__Item'>
              Login
            </NavLink>
            <NavLink
              exact
              to='/add'
              activeClassName='PageSwitcher__Item--Active'
              className='PageSwitcher__Item'>
              Register
            </NavLink>
            <NavLink
              exact
              to='/Instructorprofile'
              activeClassName='PageSwitcher__Item--Active'
              className='PageSwitcher__Item'>
              Contact
            </NavLink>
            <div className='container'>
              <Route exact path='/add' component={Register} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/Instructorprofile' component={InstructorProfile} />
              <Route exact path='/getAssignments/:_id' component={question} />
              <Route exact path='/AddQuestion' component={AddQuestion} />
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
