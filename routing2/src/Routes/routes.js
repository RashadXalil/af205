import Error from "../pages/Error/Error";
import AddProduct from "../pages/admin/AddProduct/AddProduct";
import AdminRoot from "../pages/admin/AdminRoot";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import Products from "../pages/admin/Products/Products";
import Users from "../pages/admin/Users/Users";
import Detail from "../pages/site/Detail/Detail";
import Home from "../pages/site/Home/Home";
import Shop from "../pages/site/Shop/Shop";
import SiteRoot from "../pages/site/SiteRoot";

const ROUTES = [
    {
        path: "/",
        element: <SiteRoot />,
        children: [{
            path: "",
            element: <Home />
        }, {
            path: "shop",
            element: <Shop />
        },
        {
            path: "/:id",
            element: <Detail />
        },
        {
            path: "*",
            element: <Error />
        }
        ]
    },
    {
        path: "/admin",
        element: <AdminRoot />,
        children: [{
            path: "",
            element: <Dashboard />
        }, {
            path: "products",
            element: <Products />
        }, {
            path: "users",
            element: <Users />
        }, {
            path: "add",
            element: <AddProduct />
        }]
    }
]


export default ROUTES