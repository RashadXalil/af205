import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice/CounterSlice";
import TodoSlice from "./TodoSlice/TodoSlice";
import WishlistSlice from "./WishlistSlice/WishlistSlice";


const store = configureStore({
    reducer: {
        counter: CounterSlice,
        todos: TodoSlice,
        wishlist: WishlistSlice
    }
})

export default store