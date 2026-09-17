import './App.css'
import axios from 'axios'
import Header from './components/Header';
import CartSidebar from './components/CartSidebar';
import { useState, useEffect, useRef } from "react";
import { Route, Routes, Link } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Favorites from './pages/Favorites';



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

            setIsLoading(true)

            const cartItemsResponse = await axios.get("http://localhost:3001/cartItems")
            const favoriteItemsResponse = await axios.get("http://localhost:3001/favorites") 
            const itemsResponse = await axios.get("http://localhost:3001/items")

            setIsLoading(false)
            
            setCartItems(cartItemsResponse.data)
            setFavoriteItems(favoriteItemsResponse.data)
            setItems(itemsResponse.data)
        }

        fetchData()
    }, [])

    const addToCart = async (obj) => {
        try {
            if (cartItems.find((item) => Number(item.id) == Number(obj.id))) {
                await axios.delete(`http://localhost:3001/cartItems/${obj.id}`)
                setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
            } else {
                const { data } = await axios.post("http://localhost:3001/cartItems", obj)
                setCartItems((prev) => [...prev, data])
            }
        } catch (error) {
            alert("Не удалось добавить в корзину")
        }

    }

    const removeFromCart = (id) => {
        axios.delete(`http://localhost:3001/cartItems/${id}`)
        setCartItems((prev) => prev.filter((item) => item.id !== id))
        console.log(id);
    }

    const addToFavorites = async (obj) => {
        try {
            if (favoriteItems.find(favObj => favObj.id == obj.id)) {
                axios.delete(`http://localhost:3001/favorites/${obj.id}`)
                setFavoriteItems((prev) => prev.filter((item) => item.id !== obj.id)) //- Добавить если при нажатии обьект сразу удалиться
            } else {
                const { data } = await axios.post("http://localhost:3001/favorites", obj)
                setFavoriteItems((prev) => [...prev, data])
            }
        } catch (error) {
            alert("Не удалось добавить в избранное")
        }
    }

    return (
        <>
            <div className='bg-white m-25 rounded-2xl'>
                {openSidebar && <CartSidebar items={cartItems} onClose={() => setOpenSidebar(false)} onRemove={removeFromCart} />}
                <Header onClickCart={() => setOpenSidebar(true)} />
                <main>
                    <Routes>
                        <Route path='/' element={<MainPage items={items} cartItems={cartItems} addToCart={addToCart} favoriteItems={favoriteItems} addToFavorites={addToFavorites} 
                        isLoading={isLoading}/>} />
                        <Route path='/Favorites' element={<Favorites items={favoriteItems} addToFavorites={addToFavorites} />} />
                    </Routes>
                </main>
            </div>
        </>
    )
}

export default App
