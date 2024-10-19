import React from 'react'

export default function Todocard(props) {
    const { children, handleDelete, index, handleEdit} = props;  
  
    return (
      <li className='todoitem'>  
        {children}
        <div className='actionsContainer'>
          <button onClick={() => handleEdit(index)}>
            <i className="fa-solid fa-pen-to-square"></i>  
          </button>
          <button onClick={() => handleDelete(index)}>
            <i className="fa-solid fa-trash"></i>  
          </button>
        </div>
      </li>
    );
  }
  
