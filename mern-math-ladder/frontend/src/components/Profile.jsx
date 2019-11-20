import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
class Profile extends Component {
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
        <img src="avatar.png" alt="Avatar" class="avatar"></img>
        </div>
        ) 
    }
}

export default Profile