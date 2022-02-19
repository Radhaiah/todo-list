import React from 'react'
import './App.css'
import {useState} from "react";
import Form from './Form';
import Filter from './Filter';
import Lists from './Lists';

export default function App() {
  const [filter,setFilter]=useState('');
  const [newId,setNewId] =useState("");
  const [task,setTask]=useState(
  [
    {
        id:1,
        name: 'Task-1',
        done: false
    },
    {
        id:2,
        name: 'Task-2',
        done: true 
    },
    {
        id:3,
        name: 'Task-3',
        done: false
    },
]
  );
  const formSubmit=(value) => {
    const newTask={id:newId,name:value,done:false};
    setTask([...task,newTask]);
    setNewId(newId+1);
  };
  const onCheckHandler = ((id,checked) => {
    setTask(task.map(item=>{return item.id===id?{...item,done:checked} : item;}))
  });
  const onfilterchange=(newvalue)=>{
    setFilter(newvalue);
  };
  const filtertask=()=>{
    if(filter==="Active"){
      return task.filter(item=>item.done===false);
    }
    else if(filter==="Completed")
    {
      return task.filter(item=>item.done===true); 
    }else
      return task;
  };
  const deleteHandler = (id)=>{
    setTask(task.filter(item=>item.id !==id))
  };
  return (
      <div class="container">
        <div class="col">
          <div class="col-md-12">
            <div class="card card-white">
                <div class="card-body">
                    <Form onSubmit={formSubmit}/>
                    <Filter onfilterchange={onfilterchange}/>
                    <Lists task={filtertask()} onCheckHandler={onCheckHandler} deleteHandler={deleteHandler} />
                </div>
            </div>
          </div>
        </div>
      </div>
  );
}















// import React, { Component } from "react";
// import Child from "./Child";

// export default class App extends Component {
//   constructor() {
//     super();
//     console.log('Stage 1 in Constructor');
//     this.state = {
//       value: "",
//       color: "red",
//       count: 0,
//     };
//     this.changeHandler = this.changeHandler.bind(this);
//   }

//   changeHandler(event) {
//     this.setState(
//       {
//         value: event.target.value,
//         color: event.target.value.length > 6 ? "green" : "pink",
//       },
//       () => {
//         console.log(this.state);
//       }
//     );
//   }

//   getCount = (value)=> {
//     this.setState({count : value});
//   }

//   componentDidMount() {
//     console.log('Stage 3 Mount');
//     // Data Fetching
//     // Init timer, setTimeout
//     // Any subscription
//   }

//   componentDidUpdate() {
//     console.log('Update Stage 1 in update');
//   }

//   render() {
//     console.log('Stage 2 Render');
//     debugger
//     return (
//       <div className="mt-4" style={{border: '3px solid red', padding: '20px'}}>
//         <input
//           value={this.state.value}
//           style={{ backgroundColor: this.state.color }}
//           onChange={this.changeHandler}
//         />
//         <h4>App Count : {this.state.count} </h4>
//        {this.state.count < 10 && <Child getCount={this.getCount} name={this.state.value + ' From App Comp'}  >
           
//         </Child>}
//       </div>
//     );
//   }
// }