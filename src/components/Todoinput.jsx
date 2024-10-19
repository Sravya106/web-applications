import React, { useState } from 'react';

export default function Todoinput(props) {
  const {handleTodo, todoValue, setTodoValue} = props

  return (
    <div>
      <header>
        <input
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
          type="text"
          placeholder="Enter todo"
        />
        <button
          onClick={() => {
            handleTodo(todoValue);  
            setTodoValue('');       
          }}
        >
          Add
        </button>
      </header>
    </div>
  );
}

