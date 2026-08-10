import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import ProductCard from "./ProductCard";

function Catalog() {

    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        fetch("https://6a77425c63e9caf860c3717b.mockapi.io/items")
        .then(res => {return res.json()})
        .then((json) => {setItems(json)})
    })

    const addToCart = (obj) => {
        setCartItems(prev => [...prev, obj])  
    }
    
    return (
        <main className='p-20 flex flex-col gap-10'>
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
                    onFavorite={() => {alert("Добавили в избранное:")}}
                    onPlus={(obj) => addToCart(obj)}
                    />
                ))}
            </div>
        </main>
    )
}
export default Catalog