import './App.css'
import Header from './components/Header';
import CartSidebar from './components/CartSidebar';
import ProductCard from './components/ProductCard'
import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";


function App() {

    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [openSidebar, setOpenSidebar] = useState(false)

    useEffect(() => {
        fetch("https://6a77425c63e9caf860c3717b.mockapi.io/items")
            .then(res => { return res.json() })
            .then((json) => { setItems(json) })
    })

    const addToCart = (obj) => {
        setCartItems(prev => [...prev, obj])
    }

    return (
        <>
            <div className='bg-white m-25 rounded-2xl'>
                {openSidebar && <CartSidebar items={cartItems} onClose={() => setOpenSidebar(false)} />}
                <Header onClickCart={() => setOpenSidebar(true)} />
                <div className='p-20 flex flex-col gap-10'>

                    <div className='flex items-center justify-between'>
                        <h1 className='font-bold text-4xl'>Все кроссовки:</h1>
                        <div className='flex items-center justify-center border border-gray-300 rounded-xl w-75 h-14 gap-3'>
                            <FiSearch size={25} color='lightgray' /><input type="text" placeholder='Поиск...' className='outline-0' />
                        </div>
                    </div>

                    <div className='flex flex-wrap items-center gap-18 '>
                        {items.map(item => (
                            <ProductCard
                                title={item.title}
                                price={item.price}
                                img={item.img}
                                onFavorite={() => { alert("Добавили в избранное:") }}
                                onPlus={(obj) => addToCart(obj)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
