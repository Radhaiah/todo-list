import React from 'react'

export default function List({name,done,id,onCheckHandler,deleteHandler }) {
  return (
    <div>
         <div className={"todo-item" + (done ? " complete" :"")}>
            <div className="checker"><span className=""><input type="checkbox" checked={done} onChange={e=>onCheckHandler(id,e.target.checked)}/></span></div>
                <span>{name}</span>
            <button style={{float: "right"}} onClick={()=>deleteHandler(id)} className="btn btn-light"  >X</button>
        </div>
    </div>
  )
}
