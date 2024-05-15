import React, { useContext, useState } from 'react'
import MainContext from '../../../context/context'
import axios from 'axios'
import { BASE_URL } from '../../../config/config'
import { Formik } from 'formik'
import { useNavigate } from 'react-router'

const Products = () => {
    const { data, setData } = useContext(MainContext)
    const [item, setItem] = useState([])
    const navigate = useNavigate()
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">index</th>
                        <th scope="col">image</th>
                        <th scope="col">title</th>
                        <th scope="col">price</th>
                        <th scope="col">edit</th>
                        <th scope="col">delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td><img src={item.image} width="60px" height="60px" alt="" /></td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td><button onClick={() => {
                                        axios.get(`${BASE_URL}${item._id}`).then(res => {
                                            setItem(res.data)
                                        })
                                    }} type="button" class="btn btn-warning" data-toggle="modal" data-target={`#exampleModal-${item._id}`}>
                                        edit
                                    </button></td>
                                    <td><button className='btn btn-danger' onClick={() => {
                                        axios.delete(`${BASE_URL}${item._id}`).then(res => {
                                            setData([...res.data])
                                        })
                                    }}>delete</button></td>
                                    <div class="modal fade" id={`exampleModal-${item._id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <Formik
                                                        initialValues={{ title: item.title, image: item.image, price: item.price }}
                                                        onSubmit={(values, { setSubmitting }) => {
                                                            axios.put(`${BASE_URL}${item._id}`, { ...values }).then(res => {
                                                                setData([...res.data])
                                                            })
                                                        }}
                                                    >
                                                        {({
                                                            values,
                                                            errors,
                                                            touched,
                                                            handleChange,
                                                            handleBlur,
                                                            handleSubmit,
                                                            isSubmitting,
                                                            /* and other goodies */
                                                        }) => (
                                                            <form onSubmit={handleSubmit}>
                                                                <input
                                                                    type="text"
                                                                    style={{ width: "100%" }}
                                                                    name="title"
                                                                    placeholder='title'
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.title}
                                                                /> <br />
                                                                {errors.title && touched.title && errors.title}
                                                                <input
                                                                    type="number"
                                                                    name="price"
                                                                    style={{ width: "100%" }}

                                                                    placeholder='price'
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.price}
                                                                /> <br />
                                                                <input
                                                                    type="text"
                                                                    name="image"
                                                                    style={{ width: "100%" }}
                                                                    placeholder='image'
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.image}
                                                                /> <br />
                                                                {errors.image && touched.image && errors.image}
                                                                <button type="submit" disabled={isSubmitting}>
                                                                    Submit
                                                                </button>
                                                            </form>
                                                        )}
                                                    </Formik>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Products