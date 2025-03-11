import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todos,setTodos]= useState([{task:"Sample Task",id:uuidv4(),isDone:false}]);
    let [newTodo, setNewTodo]= useState("");
    let updateTask=(event)=>{
        setNewTodo (event.target.value);  
        
    }

    let addTask=()=>{
        setTodos((prevTodos)=>{
            return([...prevTodos,{task: newTodo, id: uuidv4(),isDone:false}])
        });
        setNewTodo("");
    }
    //When we want to delete in array in React always use Filter which make a new copy after filter & 
    // when we render something or replacing always use"map", and in the time of adding use"[...arr]spread syntax"
    let deleteTodo=(id)=>{
        setTodos(todos.filter((todos)=>todos.id !=id));
    }

    // let upperCaseAll=()=>{
    //     setTodos((prevTodos)=>prevTodos.map((todos)=>{return{...todos,task:todos.task.toUpperCase(),};
    // })
    // );
    // };

    // let UpperCaseone=(id)=>{
    //     setTodos((prevTodos)=>prevTodos.map((todos)=>{
    //         if(todos.id==id){
    //             return{...todos,task:todos.task.toUpperCase(),};
    //         }else{
    //             return todos;
    //         }
    //         })
    //     );
    // };
        let doneTodoOne=(id)=>{

            setTodos((prevTodos)=>prevTodos.map((todos)=>{
                        if(todos.id==id){
                            return{...todos,isDone:true,};
                        }else{
                            return todos;
                        }
                        })
                    );
                };

        let markAllDone=()=>{
            setTodos((prevTodos)=>prevTodos.map((todos)=>
                {return{...todos,isDone:true,};
                    })
                    );
                    };

    return(
        <div className="todo-container">
            <h1 className="title">My TODO List</h1>
            <div className="input-container">
            <input type="text" placeholder="Write your ToDo" onChange={updateTask} value={newTodo} className="todo-input"/>
            <button onClick={addTask} className="add-btn">Add Task</button>
            </div>
            <hr />
            <h2 className="task-title">ToDo Task</h2>
        <ul className="task-list">
            {todos.map((todo) => (
                <li key={todo.id} className="task-item">
                <span style={todo.isDone ? { textDecoration: "line-through" } : {}}>
                    {todo.task}
                </span>
            {/* New div to wrap buttons and align them correctly */}
            <div className="btn-group">
                <button onClick={() => deleteTodo(todo.id)} className="delete-btn">Delete</button>
                <button onClick={() => doneTodoOne(todo.id)} className="done-btn">Done</button>
            </div>
            </li>
            ))}
        </ul>

            <button onClick={markAllDone} className="all-done-btn">All Done for The Day</button>
        </div>
    );
}