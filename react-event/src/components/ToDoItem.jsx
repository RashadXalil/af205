import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import '../App.css'
const ToDoItem = ({ todo, todos, setTodos }) => {
    const complateTodo = (id) => {
        const target = todos.find(item => item.id == id)
        target.isComplated = !target.isComplated
        setTodos([...todos])
        if (target.isComplated) {
            toast.success("todo complate olundu")

        } else {
            toast.success("todo complatedden silindi")
        }
    }
    const deleteTodo = (id) => {
        const target = todos.find(item => item.id == id)
        target.isDeleted = true
        setTodos([...todos])
        toast.success('item deleted.')
    }
    const recoverTodo = (id) => {
        const target = todos.find(item => item.id == id)
        target.isDeleted = false
        setTodos([...todos])
        toast.success('item geri getirildi.')
    }
    return (
        <li ><span className={todo.isComplated ? "complated" : ""}>{todo.content}</span> {todo.isDeleted ? <button onClick={() => {
            recoverTodo(todo.id)
        }}>recover</button> : <button onClick={() => {
            deleteTodo(todo.id)
        }}>delete</button>} <button onClick={() => {
            complateTodo(todo.id)
        }}>{todo.isComplated ? "tamamlama" : "tamamla"}</button>
        </li>
    )
}

export default ToDoItem