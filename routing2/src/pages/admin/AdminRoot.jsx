import React from 'react'
import Header from '../../layout/admin/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../../layout/admin/Footer/Footer'
import { Toaster } from 'react-hot-toast'

const AdminRoot = () => {
    return (
        <React.Fragment>
            <Header />
            <Outlet />
            <Footer />
            <Toaster />
        </React.Fragment>
    )
}

export default AdminRoot