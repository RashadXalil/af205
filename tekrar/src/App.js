import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./routes/routes";
import MainContext from "./context/context";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
    const router = createBrowserRouter(ROUTES)
    const [data, setData] = useState([])
    const [basketItems, setBasketItems] = useState(localStorage.getItem("basketItems") ? JSON.parse(localStorage.getItem("basketItems")) : [])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const addToBasket = (item) => {
        const target = basketItems.find(x => x.item.id == item.id)
        if (target) {
            target.count += 1
            target.totalPrice += parseInt(item.price)
            setBasketItems([...basketItems])
            localStorage.setItem("basketItems", JSON.stringify(basketItems))
        } else {
            const newBasketItem = {
                item: item,
                count: 1,
                totalPrice: item.price
            }
            setBasketItems([...basketItems, newBasketItem])
            localStorage.setItem("basketItems", JSON.stringify(basketItems))
        }

    }
    const deleteItemFromBasket = (item) => {
        const target = basketItems.find(x => x.item.id == item.id)
        if (target.count > 1) {
            target.count -= 1
            target.totalPrice -= item.price
            setBasketItems([...basketItems])
            localStorage.setItem("basketItems", JSON.stringify(basketItems))
        } else {
            setBasketItems([...basketItems.filter(x => x.item.id != item.id)])
            localStorage.setItem("basketItems", JSON.stringify([...basketItems.filter(x => x.item.id != item.id)]))
        }
    }

    useEffect(() => {
        axios.get("http://localhost:8080/api/products").then(res => {
            setData([...res.data])
            setLoading(false)
        }).catch(error => {
            setError(error)
            setLoading(false)
        })
    }, [])
    const contextData = {
        data, setData, error, setError, loading, setLoading, basketItems, setBasketItems, addToBasket, deleteItemFromBasket
    }
    return (
        <MainContext.Provider value={contextData}>
            <RouterProvider router={router} />
        </MainContext.Provider>
    );
}

export default App;
