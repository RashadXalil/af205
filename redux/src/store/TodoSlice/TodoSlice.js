import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: []
    },
    reducers: {
        addNewTodo: (state, action) => {
            state.todos = [...state.todos, {
                id: uuidv4(),
                todo: action.payload,
                isComplated: false
            }]
        },
        complateTodo: (state, action) => {
            const target = state.todos.find(item => item.id == action.payload)
            target.isComplated = !target.isComplated
        },
        deleteTodo: (state, action) => {
            const target = state.todos.find(item => item.id == action.payload)
            const indexOfTarget = state.todos.indexOf(target)
            state.todos.splice(indexOfTarget, 1)
        },
        editTodo: (state, action) => {
            const target = state.todos.find(item => item.id == action.payload.id)
            target.todo = action.payload.newTodo
        }
    }
})
export default todoSlice.reducer
export const { addNewTodo, complateTodo, deleteTodo, editTodo } = todoSlice.actions