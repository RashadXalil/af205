import React, { Fragment } from 'react'
import Header from '../../layout/site/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../../layout/site/Footer/Footer'

const SiteRoot = () => {
    return (
        <Fragment>
            <Header />
            <Outlet />
            <Footer />
        </Fragment>
    )
}

export default SiteRoot