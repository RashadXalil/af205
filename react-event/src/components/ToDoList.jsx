import React, { useState } from 'react'
import ToDoItem from './ToDoItem'
let id = 1;
const ToDoList = ({ todos, setTodos }) => {
    const [newTodo, setNewTodo] = useState("")
    const [searchItems, setSearchItems] = useState([])
    const addTodo = () => {
        let newItem = {
            id: id,
            content: newTodo,
            isComplated: false,
            isDeleted: false
        }
        id++
        setTodos([...todos, newItem])
        setSearchItems([...todos, newItem])
    }
    const searchTodo = (str) => {
        setSearchItems([...todos.filter(todo => todo.content.trim().toLowerCase().includes(str.trim().toLowerCase()))])
    }

    return (
        <div>
            <input type="text" placeholder='search todo' onChange={(e) => {
                if (e.target.value == " ") {
                    setSearchItems([...todos])
                } else {
                    searchTodo(e.target.value)
                }
            }} />
            <input type="text" placeholder='add Todo' onChange={(e) => {
                setNewTodo(e.target.value)
            }} />
            <button onClick={addTodo}>Add todo</button>
            <ul>
                {
                    searchItems.filter(item => item.isDeleted == false).map((todo, index, todos) => {
                        return (
                            <ToDoItem key={index} setTodos={setTodos} todo={todo} todos={todos} />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ToDoList