import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router'

const Detail = () => {
    const [data, setData] = useState({})
    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`).then(res => {
            setData(res.data)
        })
    })
    return (
        <>
            <Helmet>
                <title>{data.title}</title>
            </Helmet>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={data.image} alt="" />
                    </div>
                    <div className="col-6">
                        <h1>{data.title}</h1>
                        <p>Desc: {data.desc}</p>
                        <p>Price: {data.price} AZN</p>
                        <button>add to basket</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail