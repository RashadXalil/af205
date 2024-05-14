import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MainContext from '../../../context/context'
import './Header.css'
const Header = () => {
    const { basketItems } = useContext(MainContext)
    return (
        <div className='custom-header'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/shop'>Shop</Link>
                </li>
                <li>
                    <Link to='/basket'>Basket({basketItems.length})</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header