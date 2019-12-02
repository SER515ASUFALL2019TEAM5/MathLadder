//Author : Chandan Yadav

import React, { Component } from 'react';
import {
    atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
  } from 'mathjs';
import './AppDragDemo.css';
import { NavLink } from 'react-router-dom'
let prop1 = "";
let flag = false;
let clear = false;
let sum = null;
const tasks = [
    {name:"1" ,category:"wip", bgcolor: "skyblue"},
    {name:"2", category:"wip", bgcolor:"skyblue"},
    {name:"3", category:"wip", bgcolor:"skyblue"},
    {name:"4", category:"wip", bgcolor:"skyblue"},
    {name:"5", category:"wip", bgcolor:"skyblue"},
    {name:"6", category:"wip", bgcolor:"skyblue"},
    {name:"7", category:"wip", bgcolor:"skyblue"},
    {name:"8", category:"wip", bgcolor:"skyblue"},
    {name:"9", category:"wip", bgcolor:"skyblue"},
    {name:"0", category:"wip", bgcolor:"skyblue"},
    {name:"+", category:"wip", bgcolor:"skyblue"},
    {name:"-", category:"wip", bgcolor:"skyblue"},
    {name:"*", category:"wip", bgcolor:"skyblue"},
    {name:"/", category:"wip", bgcolor:"skyblue"},
    {name:"%", category:"wip", bgcolor:"skyblue"},
    {name:"(", category:"wip", bgcolor:"skyblue"},
    {name:")", category:"wip", bgcolor:"skyblue"}
]

export default class AppDragDropDemo extends Component {
    state = {
        tasks: [
            {name:"1" ,category:"wip", bgcolor: "skyblue"},
            {name:"2", category:"wip", bgcolor:"skyblue"},
            {name:"3", category:"wip", bgcolor:"skyblue"},
            {name:"4", category:"wip", bgcolor:"skyblue"},
            {name:"5", category:"wip", bgcolor:"skyblue"},
            {name:"6", category:"wip", bgcolor:"skyblue"},
            {name:"7", category:"wip", bgcolor:"skyblue"},
            {name:"8", category:"wip", bgcolor:"skyblue"},
            {name:"9", category:"wip", bgcolor:"skyblue"},
            {name:"0", category:"wip", bgcolor:"skyblue"},
            {name:"+", category:"wip", bgcolor:"skyblue"},
            {name:"-", category:"wip", bgcolor:"skyblue"},
            {name:"*", category:"wip", bgcolor:"skyblue"},
            {name:"/", category:"wip", bgcolor:"skyblue"},
            {name:"%", category:"wip", bgcolor:"skyblue"},
            {name:"(", category:"wip", bgcolor:"skyblue"},
            {name:")", category:"wip", bgcolor:"skyblue"}
          ],
          workInProgress: [],
          completedwork : [],
          finalRes : null,
          message: null
    }

    // clearListner(event) => {
    //     Clear state variables, wip, message
    // }

    onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    displayresult()
       {
           flag = true;
           try{
           this.setState({ finalRes:  evaluate(prop1)});
           console.log("finalres in display"+ this.state.finalRes);
           }
           catch(Exception)
           {
            flag = false
            this.setState({ message: "Invalid Expression from state" })
            sum= <h1>{"invalid expression"}</h1>
           }
           console.log("Display Redult"+ this.state.finalRes)
        
       }

       clearResult()
       {
        this.setState({completedwork: []});

        this.setState({ finalRes:  null});
        clear = true;
        prop1 = "";
           
       }
       

    onDrop = (ev, cat) => {

       let id = ev.dataTransfer.getData("id");
        var completedwork = this.state.completedwork;
        this.state.completedwork.push(
                id
        );
       this.setState({
        ...this.state,
        completedwork
       })

       console.log("Completed work Status"+ this.state.completedwork)
       prop1+=" "+id
    
    }

    render() {

        var comp = []

        this.state.completedwork.forEach ((t) => {
            comp.push(
                <div key={t.name} 
                    onDragStart = {(e) => this.onDragStart(e, t.name)}
                    draggable
                    className="draggable"
                    style = {{backgroundColor: "skyblue"}}
                >
                    {t}
                </div>
            );
        });
        

    
        this.state.tasks.forEach ((t) => {
            this.state.workInProgress.push(
                <div key={t.name} 
                    onDragStart = {(e) => this.onDragStart(e, t.name)}
                    draggable
                    className="draggable"
                    style = {{backgroundColor: t.bgcolor}}
                >
                    {t.name}
                </div>
            );
        });
        
        
        if(this.state.finalRes){

            sum = <h1>{this.state.finalRes}</h1>
            var errorMessage = null;
            if(this.setState.message){
             errorMessage = <h1>{this.state.message}</h1>
            }

            if(flag == false)
            {
            sum= <h1>{"invalid expression"}</h1>
            }
        }
        else
        {

            if(flag == true) 
            sum= <h1>{"invalid expression"}</h1>
            
            if(clear == true)
            sum= null
        }
        
        return (  
            <div className='App__Form'>
            <div className = 'Align_right1'>
              
            <NavLink to='/landing' activeClassName='PageSwitcher__Item--Active' className='PageSwitcher__Item'>
              Home
            </NavLink>
            <NavLink to='/StudentProfile' activeClassName='PageSwitcher__Item--Active' className='PageSwitcher__Item'>
              Assignments
            </NavLink>
            
            <NavLink
              exact
              to='/'
              activeClassName='PageSwitcher__Item--Active'
              className='PageSwitcher__Item'>
              Logout
            </NavLink>
            </div>
            

            <div className="container-drag">
                <h2>Math Ladder</h2>
                <div className="wip"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "wip")}}>
                    <span className="header"><h2>Operators</h2></span>
                    {this.state.workInProgress}
                </div>
                <div className="droppable" 
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "complete")}
                >
                     <span className="header"><h2>Calculations</h2></span>
                        
                     
                     <span className="Common_button2"><text onClick ={()=> this.displayresult() }>Result</text></span>
                     &nbsp;&nbsp;&nbsp;
                     <span className="Common_button2"><text onClick ={()=> this.clearResult() }>Clear</text></span>
                     {comp}
                     <div className ="result">
                         <label>Result: </label>
                         {sum}
                     </div>
                    {errorMessage}
                    
               
                    
                    </div>
                </div>

                


            </div>
            
        );
    }
}