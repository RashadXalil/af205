import React, { Fragment } from 'react'
import Card from '../Card/Card'

const CardList = ({ data }) => {
    return (
        <Fragment>
            {
                data.map((item, index) => {
                    return (<Card item={item} key={index} />)
                })
            }
        </Fragment>
    )
}

export default CardList