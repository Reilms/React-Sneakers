import './App.css';
import axios from 'axios';
import Header from './components/Header';
import CartSidebar from './components/CartSidebar';
import { useState, useEffect } from "react";
import { Route, Routes, Link } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Favorites from './pages/Favorites';
import AppContext from './Context';
import Orders from './pages/Orders';



function App() {
    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [favoriteItems, setFavoriteItems] = useState([])
    const [openSidebar, setOpenSidebar] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    /* useEffect(() => { 
        //При запросе информации с бекенда можно использовать 1 из 2 способов: fetch() или axios. Обычно axios лучше
        // fetch("http://localhost:3001/cartItems")
        //  .then(res => { return res.json() })
        //  .then((json) => { setItems(json) }) 
        axios.get("http://localhost:3001/items")
            .then((res) => { setItems(res.data) })
        axios.get("http://localhost:3001/cartItems")
            .then((res) => { setCartItems(res.data) })
        axios.get("http://localhost:3001/favorites")
            .then((res) => { setFavoriteItems(res.data) })
    }, []) */

    useEffect(() => {
        async function fetchData() {
            try {

                setIsLoading(true)

                const cartItemsResponse = await axios.get("http://localhost:3001/cartItems")
                const favoriteItemsResponse = await axios.get("http://localhost:3001/favorites")
                const itemsResponse = await axios.get("http://localhost:3001/items")

                setIsLoading(false)

                setCartItems(cartItemsResponse.data)
                setFavoriteItems(favoriteItemsResponse.data)
                setItems(itemsResponse.data)
            } catch (error) {
                alert("Ошибка при запросе данных :(")
                console.error(error);
            }
        }

        fetchData()
    }, [])

    const addToCart = async (obj) => {
        try {
            const findItem = cartItems.find((item) => item.parentId === obj.id)
            if (findItem) {
                setCartItems((prev) => prev.filter((item) => item.parentId !== obj.id))
                await axios.delete(`http://localhost:3001/cartItems/${findItem.id}`)
            } else {
                const { data } = await axios.post("http://localhost:3001/cartItems", { ...obj, parentId: obj.id })
                setCartItems((prev) => [...prev, data])
            }
        } catch (error) {
            alert("Не удалось добавить в корзину")
        }
    }

    const removeFromCart = (id) => {
        try {
            axios.delete(`http://localhost:3001/cartItems/${id}`)
            setCartItems((prev) => prev.filter((item) => item.id !== id))
        } catch (error) {
            alert("Не удалось удалить из корзины :(")
            console.error(error);
        }
    }

    const addToFavorites = async (obj) => {
        try {
            const findItem = favoriteItems.find((item) => item.parentId === obj.id)
            if (findItem) {
                await axios.delete(`http://localhost:3001/favorites/${findItem.id}`)
                setFavoriteItems((prev) => prev.filter((item) => item.parentId !== obj.id))
            } else {
                const { data } = await axios.post("http://localhost:3001/favorites", { ...obj, parentId: obj.id })
                setFavoriteItems((prev) => [...prev, data])
            }
        } catch (error) {
            alert("Не удалось добавить в избранное")
        }
    }

    const isItemAdded = (id) => {
        return cartItems.some(obj => obj.parentId === id)
    }

    const isItemFavorited = (id) => {
        return favoriteItems.some(obj => obj.parentId === id)
    }

    return (
        <>
            <div className='bg-white m-25 rounded-2xl'>
                <AppContext.Provider value={{
                    items,
                    cartItems,
                    favoriteItems,
                    addToCart,
                    isItemAdded,
                    addToFavorites,
                    isItemFavorited,
                    setCartItems,
                    setOpenSidebar
                }}>
                    <CartSidebar items={cartItems} onClose={() => setOpenSidebar(false)} onRemove={removeFromCart} opened={openSidebar} />
                    <Header onClickCart={() => setOpenSidebar(true)} />
                    <main>
                        <Routes>
                            <Route path='/' element={<MainPage items={items} cartItems={cartItems} addToCart={addToCart}
                                favoriteItems={favoriteItems} addToFavorites={addToFavorites} isLoading={isLoading} />} />
                            <Route path='/Favorites' element={<Favorites />} />
                            <Route path='/Orders' element={<Orders />} />
                        </Routes>
                    </main>
                </AppContext.Provider>
            </div>
        </>
    )
}

export default App