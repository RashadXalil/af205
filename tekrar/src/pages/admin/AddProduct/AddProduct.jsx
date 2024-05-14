import axios from 'axios'
import { Formik } from 'formik';
import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const AddProduct = () => {
    return (
        <div>
            <Formik
                initialValues={{ title: '', image: '', price: '', desc: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    axios.post("http://localhost:3000/products", {
                        id: uuidv4(),
                        title: values.title,
                        desc: values.desc,
                        image: values.image,
                        price: values.price
                    }).then(res => {

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
                        <input
                            type="text"
                            placeholder='image'
                            name="image"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.image}
                        />
                        <input
                            type="number"
                            placeholder='price'
                            name="price"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.price}
                        />
                        <input
                            type="text"
                            name="desc"
                            placeholder='desc'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.desc}
                        />
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default AddProduct