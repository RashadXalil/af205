import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, increaseByAmount } from '../store/CounterSlice/CounterSlice'
const Counter = () => {
    const { counter } = useSelector(state => state.counter)
    const dispatch = useDispatch()
    const inputRef = useRef()
    return (
        <div>
            <button onClick={() => {
                dispatch(decrement())
            }} >-</button>
            <span>{counter}</span>
            <button onClick={() => {
                dispatch(increment())
            }}>+</button>
            <input ref={inputRef} type="number" placeholder='amount' />
            <button onClick={() => {
                dispatch(increaseByAmount(inputRef.current.value))
            }}>increase by amount</button>
        </div>
    )
}

export default Counter