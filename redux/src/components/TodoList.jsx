import React, { Fragment, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../App.css'
import { addNewTodo, complateTodo, deleteTodo, editTodo } from '../store/TodoSlice/TodoSlice'
const TodoList = () => {
    const { todos } = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const inputRef = useRef()
    return (
        <Fragment>
            <input type="text" placeholder='new todo' ref={inputRef} />
            <button onClick={() => {
                dispatch(addNewTodo(inputRef.current.value))
            }}>add todo</button>
            <ul>
                {
                    todos.map((item, index) => {
                        return (
                            <li key={index}><span className={item.isComplated ? "complated" : ""}>{item.todo}</span> <button onClick={() => {
                                dispatch(complateTodo(item.id))
                            }}>complate</button><button onClick={() => {
                                dispatch(deleteTodo(item.id))
                            }}>delete</button><button onClick={() => {
                                const newTodo = prompt("edit new todo")
                                dispatch(editTodo({ id: item.id, newTodo: newTodo }))
                            }}>edit</button></li>
                        )
                    })
                }
            </ul>
        </Fragment>
    )
}

export default TodoList