import React, {useEffect, useState} from 'react';
//UUID OM ID's te kunnen genereren
import { v4 as uuidv4 } from "uuid";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";

function TodoApp(){
    const [todos, setTodos] = useState([]);

    //hiermee kan je todos updaten
    function handleChange(id){
        setTodos(
            todos.map(todo =>{
                if(todo.id === id){
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        );

        console.log("geklikt " + id);
    }

    function delTodo(id){
        console.log("deleted", id);
        setTodos(
            todos.filter(todo => {
                return todo.id !== id;
            })
        )
    }

    function addTodo(title){
        console.log(title);
        //gaat de state udate van todos
        const newTodo={
            // id is hardcoded, we installen UUID om dit op te lossen
            // krijgt een uniek heel lange ID
            id:uuidv4(),
            title: title,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    }
  
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=10").then((res) => res.json()).then(setTodos).catch(console.error)
    }, []
    );
  
    return(
        <div className="container">
            <Header />
            <InputTodo 
                addTodo={addTodo}
            />
            <TodosList 
                todos={todos}
                handleChangeProps={handleChange}
                deleteTodoProps={delTodo}
                />
        </div>
    )
  }

  //altijd exporten anders kan je er niet in de index
  export default TodoApp;