import './App.css'
import axios from 'axios'
import Header from './components/Header';
import CartSidebar from './components/CartSidebar';
import { useState, useEffect } from "react";
import { Route, Routes, Link } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Favorites from './pages/Favorites';



function App() {

    const [cartItems, setCartItems] = useState([])
    const [openSidebar, setOpenSidebar] = useState(false)

    useEffect(() => {
        //При запросе информации с бекенда можно использовать 1 из 2 способов: fetch() или axios. Обычно axios лучше
        /* fetch("http://localhost:3001/cartItems")
            .then(res => { return res.json() })
            .then((json) => { setItems(json) }) */

        axios.get("http://localhost:3001/cartItems")
            .then((res) => { setCartItems(res.data) })
    }, [])

    const addToCart = (obj) => {
        axios.post("http://localhost:3001/cartItems", obj)
        setCartItems(prev => [...prev, obj])
    }

    const removeFromCart = (id) => {
        axios.delete(`http://localhost:3001/cartItems/${id}`)
        setCartItems((prev) => prev.filter((item) => item.id !== id))
        console.log(id);
    }

    return (
        <>
            <div className='bg-white m-25 rounded-2xl'>
                {openSidebar && <CartSidebar items={cartItems} onClose={() => setOpenSidebar(false)} onRemove={removeFromCart} />}
                <Header onClickCart={() => setOpenSidebar(true)} />
                <main>
                    <Routes>
                        <Route path='/' element={<MainPage cartItems={cartItems} addToCart={addToCart}/>} />
                        <Route path='/Favorites' element={<Favorites/>}/>
                    </Routes>
                </main>
            </div>
        </>
    )
}

export default App
