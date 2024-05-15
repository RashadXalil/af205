import Add from "../pages/admin/Add/Add";
import AdminRoot from "../pages/admin/AdminRoot";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import Products from "../pages/admin/Products/Products";
import Detail from "../pages/site/Detail/Detail";
import Home from "../pages/site/Home/Home";
import Shop from "../pages/site/Shop/Shop";
import SiteRoot from "../pages/site/SiteRoot";

const routes = [{
    path: "/",
    element: <SiteRoot />,
    children: [{
        path: '',
        element: <Home />
    }, {
        path: 'shop',
        element: <Shop />
    }, {
        path: 'detail/:id',
        element: <Detail />
    }]
}, {
    path: '/admin',
    element: <AdminRoot />,
    children: [{
        path: '',
        element: <Dashboard />
    }, {
        path: 'products',
        element: <Products />
    }, {
        path: 'add',
        element: <Add />
    }]
}]

export default routes