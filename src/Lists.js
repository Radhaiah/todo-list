import React from 'react'
import List from './List'
export default function Lists({task,onCheckHandler, deleteHandler}) {
    
  return (
    <div className="todo-list">
    {
        task.length>0?task.map(item=>{
            return <List key={item.id} name={item.name} done={item.done} onCheckHandler={onCheckHandler} id={item.id} deleteHandler={deleteHandler}/>
        }): <div>no items to display</div>
    }
    </div>
  )
}
