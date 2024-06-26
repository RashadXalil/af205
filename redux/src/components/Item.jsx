import React from 'react'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../store/WishlistSlice/WishlistSlice'
const Item = ({ item }) => {
    const dispatch = useDispatch()
    return (
        <div className="col-4 mb-5">
            <div class="card" style={{ width: "18rem" }}>
                <img class="card-img-top" height="250px" src={item.thumbnail} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button onClick={() => {
                        dispatch(addToWishlist(item))
                    }}>add to wishlist</button>
                </div>
            </div></div>
    )
}

export default Item