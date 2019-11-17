// /*
// Author : Akhila
// */


// import './App.css'
// import React, { Component } from 'react'
// import { HashRouter as Router, Route, NavLink } from 'react-router-dom'
// import signInForm from './components/signInForm'
// import signUpForm from './components/signUpForm'
// import homePage from './components/homePage'

// class App extends Component {
//   render () {
//     return (
//       <Router basename='/react-auth-ui/'>
//         <div className='App'>
//           <div className='App__Aside'></div>
//           <div className='App__Form'>
//             <div className='PageSwitcher'>
//               <NavLink to='/sign-in' activeClassName='PageSwitcher__Item--Active' className='PageSwitcher__Item'>
//                 Sign In
//               </NavLink>
//               <NavLink
//                 exact
//                 to='/'
//                 activeClassName='PageSwitcher__Item--Active'
//                 className='PageSwitcher__Item'>
//                 Sign Up
//               </NavLink>
//             </div>
//             <div className='FormTitle'>
//               <NavLink to='/sign-in' activeClassName='FormTitle__Link--Active' className='FormTitle__Link'>
//                 Sign In
//               </NavLink> or
//               <NavLink
//                 exact
//                 to='/'
//                 activeClassName='FormTitle__Link--Active'
//                 className='FormTitle__Link'>
//                 Sign Up
//               </NavLink>
//             </div>
//             <Route exact path='/' component={signUpForm}>
//             </Route>
//             <Route path='/sign-in' component={signInForm}>
//             </Route>
//             <Route path='/homePage' component={homePage}>
//             </Route>
//           </div>
//         </div>
//       </Router>
//     )
//   }
// }

// export default App

import React, {Component} from 'react';
import { HashRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/NavBar'
import Landing from './components/landing'
import Login from './components/Login'
import Register from './components/register'
import InstructorProfile from './components/InstructorProfile';
import question from './components/question';
import AddQuestion from './components/AddQuestion'
import answerQuestion from './components/answerQuestion'
import StudentProfile from './components/StudentProfile';
import AppDragDropDemo from './components/AppDragDropDemo'

class App extends Component {
  render () {
    return (
      <Router>
        <div className= "App">
          <Navbar/>
          <Route exact path="/" component = {Landing}/>
          <div className = "container">
              <Route exact path = "/add" component = {Register}/>
              <Route exact path = "/login" component = {Login}/>
              <Route exact path = "/Instructorprofile" component = {InstructorProfile}/>
              <Route exact path = "/Studentprofile" component = {StudentProfile}/>
              <Route exact path = "/getAssignments/:_id" component = {question}/>
              <Route exact path = "/AddQuestion" component = {AddQuestion}/>
              <Route exact path = "/Question" component = {AddQuestion}/>
              <Route exact path = "/getAssignmentForStudent/:_id" component = {answerQuestion}/>
              <Route exact path = "/AppDragDropDemo" component = {AppDragDropDemo}/>
          </div>
        </div>
      </Router>  
    )
  }
}

export default App