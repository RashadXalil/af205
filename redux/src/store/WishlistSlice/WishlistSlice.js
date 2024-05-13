import { createSlice } from "@reduxjs/toolkit";


const WishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        items: localStorage.getItem("wishlistItems") ? JSON.parse(localStorage.getItem("wishlistItems")) : []
    },
    reducers: {
        addToWishlist: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeItemFromWishlist: (state, action) => {
            state.items = [...state.items.filter(item => item.id != action.payload)]
        }
    }
})
export default WishlistSlice.reducer
export const { addToWishlist, removeItemFromWishlist } = WishlistSlice.actions