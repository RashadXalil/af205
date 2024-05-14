
import React, { useContext } from 'react'
import MainContext from '../../../context/context'

const Basket = () => {
    const { basketItems, addToBasket, deleteItemFromBasket } = useContext(MainContext)
    let basketTotal = 0
    return (
        <>
            <table class="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">index</th>
                        <th scope="col">title</th>
                        <th scope="col">image</th>
                        <th scope="col">price</th>
                        <th scope="col">total price</th>
                        <th scope="col">count</th>
                        <th scope="col">add</th>
                        <th scope="col">delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        basketItems.map((item, index) => {
                            basketTotal += item.totalPrice
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.item.title}</td>
                                    <td><img src={item.item.image} width="60px" alt="" height="60px" /></td>
                                    <td>{item.item.price} AZN</td>
                                    <td>{item.totalPrice} AZN</td>
                                    <td><button className='btn btn-danger' onClick={() => {
                                        deleteItemFromBasket(item.item)
                                    }}>delete</button></td>
                                    <td>{item.count}</td>
                                    <td><button className='btn btn-primary' onClick={() => {
                                        addToBasket(item.item)
                                    }}>add</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <h1>Total Price: {basketTotal} AZN</h1>
        </>
    )
}

export default Basket