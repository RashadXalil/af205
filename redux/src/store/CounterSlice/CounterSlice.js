import { createSlice } from "@reduxjs/toolkit";


const CounterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 0
    },
    reducers: {
        increment: (state, action) => {
            state.counter += 1
        },
        decrement: (state, action) => {
            state.counter -= 1
        },
        increaseByAmount: (state, action) => {
            state.counter += parseInt(action.payload)
        }
    }
})

export default CounterSlice.reducer
export const { increment, decrement, increaseByAmount } = CounterSlice.actions