import {React, Component } from 'react';

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


class DragDropDemoNew extends Component{
    state = {
        presentTasks: [],
        finalResult: null
    }

    onDragOver = (event) => {

    }

    onDrop = (event,status) => {

    }

    displayresult = () => {

    }

    clearResult = () => {

    }

    render() {

        
        return (  

            <div className="container-drag">
                <h2 className="header">Math Ladder</h2>
                <div className="wip"
                    onDragOver={(e)=>this.onDragOver(e)}
                    >
                    <span className="task-header">Operators</span>
                    {tasks}
                </div>
                <div className="droppable" 
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "complete")}
                >
                     <span className="task-header">Calculations</span>
                     <span className="button"><button onClick ={()=> this.displayresult() }>Result</button></span>
                     <span className="button"><button onClick ={()=> this.clearResult() }>Clear</button></span>
                     {tasks}
                
                </div>

                <div className="task-header">
                    
                </div>


            </div>
        );
    }

}

export default DragDropDemoNew;

