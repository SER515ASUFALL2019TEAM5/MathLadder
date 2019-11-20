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
import answerQuestion from './components/answerQuestion'
import StudentProfile from './components/StudentProfile'
import AppDragDropDemo from './components/AppDragDropDemo'
import AppDragDemoGrade3 from './components/AppDragDemoGrade3'

class App extends Component {
  render () {
    return (
      <Router basename='/react-auth-ui/'>
        <Route exact path='/landing' component={Landing} />
        <Route exact path='/add' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/Instructorprofile' component={InstructorProfile} />
        <Route exact path='/Studentprofile' component={StudentProfile} />
        <Route exact path='/getAssignments/:_id' component={question} />
        <Route exact path='/AddQuestion' component={AddQuestion} />
        <Route exact path='/Question' component={AddQuestion} />
        <Route exact path='/getAssignmentForStudent/:_id' component={answerQuestion} />
        <Route exact path='/AppDragDropDemo' component={AppDragDropDemo} />
        <Route exact path='/AppDragDemoGrade3' component={AppDragDemoGrade3} />
      </Router>
    )
  }
}

export default App
