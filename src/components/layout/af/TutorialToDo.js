import React, {useState} from 'react';
import styled from 'styled-components';
import './TutorialToDo.css'

function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
      <div className="todo"
        style={{display:'flex', textDecoration: todo.isCompleted ? "line-through" : "" }}>
        {todo.text}
        <div >
          <button onClick={() => completeTodo(index)} style={{marginRight:'2px'}}>Done</button>
          <button onClick={() => removeTodo(index)}>x</button>
        </div>
      </div>
    );
  }
  
  function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    );
  }
  
  function App() {
    const [todos, setTodos] = useState([
      {
        text: "Visualizar uma To Do List",
        isCompleted: true
      },
      {
        text: "Aprender ReactJS",
        isCompleted: false
      },
      {
        text: "Ser um programador",
        isCompleted: false
      }
    ]);
  
    const addTodo = text => {
      const newTodos = [...todos, { text }];
      setTodos(newTodos);
    };
  
    const completeTodo = index => {
      const newTodos = [...todos];
      newTodos[index].isCompleted = true;
      setTodos(newTodos);
    };
  
    const removeTodo = index => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };

    const Warning = styled.div`
    background-color:white;
    width:250px;
    border-radius:5px;
    display: inline-block;
    padding: 7px;
    box-shadow: 1px 1px 30px 1px rgba(0, 0, 0, 0.9);
    margin:0 auto;
    margin-top:75px;
    margin-bottom:-30px;
    @media(max-width:992px){
      margin-top:20px;
    };
    `
    const WarningHr = styled.hr`
    width:13.5rem;
  border-width: 0.2rem;
  border-color: #209cee;
  margin:0 auto;
  padding-bottom:8px;
  `

    return (
      <div className="app">
            <Warning>
              <div style={{fontSize:'30px', justifyContent:'center', display:'flex'}}>Manual de uso</div>
              <WarningHr/>
              <h3>Done = Realizado</h3>
              <h3>X = Remover</h3>
              </Warning>
        <div className="container todo-list">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    );
  }
  
  export default App;