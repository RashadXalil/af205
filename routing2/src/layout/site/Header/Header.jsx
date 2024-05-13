import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
    return (
        <div className='custom__navbar'>
            <div className='container'>
                <div className="row">
                    <div className="col-4">
                        <h2>Logo</h2>
                    </div>
                    <div className="col-4">
                        <ul className='navbar__list'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>

                            <li>
                                <Link to='/shop'>Shop</Link>
                            </li>

                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>

                            <li>
                                <Link to='/blog'>Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <div className="header__buttons">
                            <button>Login</button>
                            <button>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header