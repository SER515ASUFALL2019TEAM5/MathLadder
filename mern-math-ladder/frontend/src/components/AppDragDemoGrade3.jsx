import React, { Component } from 'react';
import {
    atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
  } from 'mathjs';
import './AppDragDemo.css';
let prop1 = "";
let flag = false;
let sum = null;
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
            {name:"-", category:"wip", bgcolor:"skyblue"}
          ],
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
           }
           catch(Exception)
           {
            flag = false
            this.setState({ message: "Invalid Expression from state" })
            sum= <h1>{"invalid expression"}</h1>
           }
        
       }

       

    onDrop = (ev, cat) => {
       let id = ev.dataTransfer.getData("id");
       
       let tasks = this.state.tasks.filter((task) => {
           if (task.name == id) {
               task.category = cat;
           }

           return task;
       });

    
       prop1+=" "+id
    
       this.setState({
           ...this.state,
           tasks
       });

    

    }

    render() {
        var tasks = {
            wip: [],
            complete: []
        }


        this.state.tasks.forEach ((t) => {
            tasks[t.category].push(
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
        }

        return (  

            <div className="container-drag">
                <h2 className="header">Math Ladder</h2>
                <div className="wip"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "wip")}}>
                    <span className="task-header">Operators</span>
                    {tasks.wip}
                </div>
                <div className="droppable" 
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "complete")}
                >
                     <span className="task-header">Calculations</span>
                     <span className="button"><button onClick ={()=> this.displayresult() }>Result</button></span>
                     <span className="button"><button onClick ={()=> this.clearResult() }>Clear</button></span>
                     {tasks.complete}
                     
                     <text>{sum}</text>
                    {errorMessage}
                </div>

                <div className="task-header">
                    
                </div>


            </div>
        );
    }
}