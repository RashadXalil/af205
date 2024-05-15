import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ item }) => {
    return (
        <div className="col-3 mb-5">
            <div class="card" style={{ width: "18rem" }}>
                <img class="card-img-top" height="250px" src={item.image} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="card-text">Qiymet:{item.price} AZN</p>
                    <Link to={`detail/${item._id}`}>Go to detail</Link>
                </div>
            </div>
        </div>
    )
}

export default Card