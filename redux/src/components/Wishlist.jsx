import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItemFromWishlist } from '../store/WishlistSlice/WishlistSlice'
const Wishlist = () => {
    const { items } = useSelector(state => state.wishlist)
    const dispatch = useDispatch()
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">image</th>
                    <th scope="col">title</th>
                    <th scope="col">price</th>
                    <th scope="col">delete</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row"><img src={item.thumbnail} width="60px" height="60px" alt="" /></th>
                            <td>{item.title}</td>
                            <td>{item.price} AZN</td>
                            <td><button className='btn btn-danger' onClick={() => {
                                dispatch(removeItemFromWishlist(item.id))
                            }}>delete</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Wishlist