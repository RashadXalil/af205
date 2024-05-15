import axios from 'axios'
import React from 'react'
import { BASE_URL } from '../../../config/config'
import { Formik } from "formik"
const Add = () => {
    return (
        <Formik
            initialValues={{ title: '', image: '', price: '' }}
            onSubmit={(values, { setSubmitting }) => {
                axios.post(`${BASE_URL}`, { ...values }).then(res => {
                    console.log(res)
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
                        name="title"
                        placeholder='title'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title}
                    />
                    {errors.title && touched.title && errors.title}
                    <input
                        type="number"
                        name="price"
                        placeholder='price'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.price}
                    />
                    <input
                        type="text"
                        name="image"
                        placeholder='image'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.image}
                    />
                    {errors.image && touched.image && errors.image}
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    )
}

export default Add