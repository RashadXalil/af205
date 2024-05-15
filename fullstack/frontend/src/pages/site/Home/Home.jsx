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
                    {
                        loading ? <Loading /> : <CardList data={data} />
                    }
                </div>
            </div>
        </>
    )
}

export default Home