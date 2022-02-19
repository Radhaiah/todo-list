import React, {useState} from 'react'

export default function Filter({onfilterchange}) {
    const filters = ['All','Active','Completed'];
    
    const clickHandler=(curentvalue)=>{
      onfilterchange(curentvalue);
    }  
  return (
    <div>
        <ul className="nav nav-pills todo-nav">
        {filters.map((item) => {
          return (
            <li key={item} role="presentation" className="nav-item all-task active" onClick={()=>clickHandler(item)}>
            <a href="#" className="nav-link" style={{cursor:"ponter"}}>{item}</a></li>);
        })}
        </ul>
    </div>
  )
}
