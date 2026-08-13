import './App.css'
import axios from 'axios'
import Header from './components/Header';
import CartSidebar from './components/CartSidebar';
import ProductCard from './components/ProductCard'
import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { ImCross } from "react-icons/im";


function App() {

    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [openSidebar, setOpenSidebar] = useState(false)

    useEffect(() => {
        //При запросе информации с бекенда можно использовать 1 из 2 способов: fetch() или axios. Обычно axios лучше
        /* fetch("https://6a77425c63e9caf860c3717b.mockapi.io/items")
            .then(res => { return res.json() })
            .then((json) => { setItems(json) }) */

        axios.get("https://6a77425c63e9caf860c3717b.mockapi.io/items")
        .then((res) => {setItems(res.data)})
        //Для корзины
        axios.get("https://6a77425c63e9caf860c3717b.mockapi.io/cartItems")
        .then((res) => {setCartItems(res.data)})
    }, [])

    const addToCart = (obj) => {
        axios.post("https://6a77425c63e9caf860c3717b.mockapi.io/cartItems", obj)
        setCartItems(prev => [...prev, obj])
    }

    const removeFromCart = (id) => {
        axios.delete(`https://6a77425c63e9caf860c3717b.mockapi.io/cartItems/${id}`)
        setCartItems((prev) => prev.filter((item) => item.id !== id))
    }

    const onChangeOfSearch = (event) => {
        setSearchValue(event.target.value)
    }


    return (
        <>
            <div className='bg-white m-25 rounded-2xl'>
                {openSidebar && <CartSidebar items={cartItems} onClose={() => setOpenSidebar(false)} onRemove={removeFromCart}/>}
                <Header onClickCart={() => setOpenSidebar(true)} />
                <div className='p-20 flex flex-col gap-10'>

                    <div className='flex items-center justify-between'>
                        <h1 className='font-bold text-4xl '>{searchValue ? `Поиск по запросу "${searchValue}"` : `Все кроссовки: `}</h1>
                        <div className='flex items-center justify-center border border-gray-300 rounded-xl w-75 h-14 gap-3 relative'>
                            <FiSearch size={25} color='lightgray' />
                            <input type="text" placeholder='Поиск...' className='outline-0' value={searchValue} onChange={onChangeOfSearch}/>
                            {searchValue && <span className='absolute right-0 mr-3 cursor-pointer overflow-auto bg-white flex items-center justify-center w-10 h-10'
                            onClick={() => setSearchValue('')}>
                                <ImCross color='lightgray' size={16}/>
                            </span>}
                        </div>
                    </div>

                    <div className='flex flex-wrap items-center gap-18 '>
                        {items
                        .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((item, index) => (
                            <ProductCard
                                key={index}
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
