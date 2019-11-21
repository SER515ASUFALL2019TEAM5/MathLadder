import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
class ProfileIns extends Component {
    render(){
        return (
            <div className='App__Form'>
          
            <div className = 'text-center'><h1>Welcome to Math Ladder!! </h1></div>
      <div className = 'Align_right'>
        
        <NavLink to='/InstructorProfile' activeClassName='PageSwitcher__Item--Active' className='PageSwitcher__Item'>
          Home
        </NavLink>
        <NavLink to='/ProfileIns' activeClassName='PageSwitcher__Item--Active' className='PageSwitcher__Item'>
          Profile
        </NavLink>
        <NavLink to='/InstructorProfile' activeClassName='PageSwitcher__Item--Active' className='PageSwitcher__Item'>
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
    <div className="Relative_position">
              <div className="col-md-6 mt-5 mx-auto">
                <form>
                  
                
                  <h1 className="h3 mb-3 font-weight-normal"> </h1>
                  <div className="form-group">
                  <div className = "input_width">

                  <label htmlFor="username">Full Name</label>
                    <input
                      type="string"
                      className="form-control"
                      name="username"
                      placeholder="Jim Corbett"
                      
                    />
                   </div>
                   </div>
                   <div className="form-group">
                   <div className = "input_width">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="string"
                      className="form-control"
                      name="email"
                      placeholder="student@gmail.com"
                     
                    />
                  </div>
                  </div>
                  <div className="form-group">
                  <div className = "input_width">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value="FakePSW"
                      
                    />
                  </div>
                  </div>
                  <div className="form-group">
                    <label>Grade</label><h1></h1>
                  <select id="Grade" name="Grade">
      <option value="grade1">Grade1</option>
      <option value="grade1">Grade2</option>
      <option value="grade1">Grade3</option>
      <option value="grade1">Grade4</option>
      <option value="grade1">Grade5</option>
      <option value="grade1">Grade6</option>
      <option value="grade1">Grade7</option>
      <option value="grade1">Grade8</option>
      <option value="grade1">Grade9</option>
      <option value="grade1">Grade10</option>
      
      
    </select>
    </div>
                  

                   
                  <div className="form-group">
                  <div className = "input_width">
                  <button type="submit" className="btn btn-lg btn-primary btn-block">
                      Update
                  </button>
                  </div>
                  </div>
                </form>
              </div>
            </div>
   
    </div>
    
   
 

        ) 
    }
}

export default ProfileIns