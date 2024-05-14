import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MainContext from '../../../context/context'

const Card = ({ item }) => {
    const { addToBasket } = useContext(MainContext)
    return (
        <div className="col-3 mt-5 mb-5">
            <div class="card" style={{ width: "18rem" }}>
                <img class="card-img-top" height="250px" src={item.image} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="card-text">Price:{item.price} AZN <br /> {item.desc}</p>
                    <Link to={`details/${item.id}`}>Detail</Link>
                    <button onClick={() => {
                        addToBasket(item)
                    }}>add to basket</button>
                </div>
            </div>
        </div>
    )
}

export default Card