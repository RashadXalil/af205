import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { BASE_URL } from '../../../config/config'
import { Helmet } from "react-helmet"
const Detail = () => {
    const [item, setItem] = useState({})
    const { id } = useParams()
    useEffect(() => {
        axios.get(`${BASE_URL}${id}`).then(res => {
            setItem(res.data)
        })
    }, [])
    return (
        <>
            <Helmet>
                <title>{item.title}</title>
            </Helmet>
            <div className='container'>
                <div className="row">
                    <div className="col-6">
                        <img src={item.image} alt="" /></div>
                </div>
            </div>
        </>
    )
}

export default Detail