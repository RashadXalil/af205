import { RouterProvider } from "react-router";
import MainContext from "./context/context";
import { createBrowserRouter } from "react-router-dom"
import axios from "axios"
import routes from "./routes/routes";
import { useEffect, useState } from "react";
import { BASE_URL } from "./config/config";

function App() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    useEffect(() => {
        axios.get(BASE_URL).then(res => {
            console.log(res)
            setData(res.data)
            setLoading(false)
        }).catch(error => {
            setError(error)
            setLoading(false)
        })
    }, [])
    const contextData = {
        data, setData, loading, setLoading, error, setError
    }
    const router = createBrowserRouter(routes)
    return (
        <MainContext.Provider value={contextData}>
            <RouterProvider router={router} />
        </MainContext.Provider>
    );
}

export default App;
