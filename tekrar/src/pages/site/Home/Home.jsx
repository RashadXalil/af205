import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import Loading from '../../../components/Loading/Loading'
import CardList from '../../../components/site/CardList/CardList'
import { Helmet } from 'react-helmet'

const Home = () => {
    const { loading, data } = useContext(MainContext)
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2>Best Seller Products</h2>
                    </div>
                    {
                        loading ? <Loading /> : <CardList data={data.slice(0, 4)} />
                    }
                </div>
            </div>
        </>
    )
}

export default Home