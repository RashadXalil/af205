import Detail from "../pages/Detail/Detail";
import AddProduct from "../pages/admin/AddProduct/AddProduct";
import AdminRoot from "../pages/admin/AdminRoot";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import Products from "../pages/admin/Products/Products";
import Basket from "../pages/site/Basket/Basket";
import Home from "../pages/site/Home/Home";
import Shop from "../pages/site/Shop/Shop";
import SiteRoot from "../pages/site/SiteRoot";

const ROUTES = [{
    path: '/',
    element: <SiteRoot />,
    children: [{
        path: '',
        element: <Home />
    }, {
        path: "shop",
        element: <Shop />
    }, {
        path: "basket",
        element: <Basket />
    }, {
        path: "details/:id",
        element: <Detail />
    }
    ]
}, {
    path: '/admin',
    element: <AdminRoot />,
    children: [{
        path: "",
        element: <Dashboard />
    }, {
        path: "products",
        element: <Products />
    }, {
        path: "add",
        element: <AddProduct />
    }]
}]


export default ROUTES