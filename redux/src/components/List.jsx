import React, { useEffect, useState } from 'react'
import Item from './Item'

const List = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://dummyjson.com/products").then(res => res.json()).then(data => {
            setData(data.products)
        })
    }, [])
    return (
        <div className='container'>
            <div className="row">
                {
                    data.map((item, index) => {
                        return (
                            <Item item={item} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default List