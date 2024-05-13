import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
    const { items } = useSelector(state => state.wishlist)
    console.log(items)
    return (
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>

            <li>
                <Link to='/wishlist'>Wishlist({items.length})</Link>
            </li>
        </ul>
    )
}

export default Header