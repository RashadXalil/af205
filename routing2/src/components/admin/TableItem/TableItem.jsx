import axios from 'axios'
import React, { useContext, useState } from 'react'
import MainContext from '../../../context/context'
import { Toaster, toast } from "react-hot-toast"
const TableItem = ({ item }) => {
    const { data, setData } = useContext(MainContext)
    const deleteItem = (id) => {
        axios.delete(`http://localhost:3000/products/${id}`).then(res => {
            setData([...data.filter(x => x.id != res.data.id)])
            toast.success("item deleted")
        })
    }
    return (
        <tr>
            <th scope="row">{item.id}</th>
            <td><img src={item.image} width="60px" height="60px" alt="" /></td>
            <td>{item.name}</td>
            <td>{item.price}AZN</td>
            <td>{item.description}</td>
            <td><button className='btn  btn-danger' onClick={() => {
                deleteItem(item.id)
            }}>delete</button></td>
        </tr>
    )
}

export default TableItem