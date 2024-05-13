import { Provider } from "react-redux";
import store from "./store/store";
import List from "./components/List";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wishlist from "./components/Wishlist";
function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route element={<List />} path="/" />
                    <Route element={<Wishlist />} path="/wishlist" />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
