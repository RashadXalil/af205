import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import { Helmet } from 'react-helmet'
import Loading from '../../../components/Loading/Loading'
import CardList from '../../../components/site/CardList/CardList'

const Shop = () => {
    const { data, loading } = useContext(MainContext)
    return (
        <>
            <Helmet>
                <title>Shop</title>
            </Helmet>
            <div className="container">
                <div className="row">

                    {loading ? <Loading /> : <CardList data={data} />}
                </div>
            </div>
        </>
    )
}

export default Shop