import axios from 'axios'
import ProductCard from '../components/ProductCard'
import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { ImCross } from "react-icons/im";

function MainPage({ cartItems = [], addToCart, favoriteItems = [], addToFavorites}) {

    const [items, setItems] = useState([])
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        axios.get("http://localhost:3001/items")
            .then((res) => { setItems(res.data) })
    }, [])

    const onChangeOfSearch = (event) => {
        setSearchValue(event.target.value)
    }


    return (
        <>
            <div className='p-20 flex flex-col gap-10'>

                <div className='flex items-center justify-between'>
                    <h1 className='font-bold text-4xl '>{searchValue ? `Поиск по запросу "${searchValue}"` : `Все кроссовки: `}</h1>
                    <div className='flex items-center justify-center border border-gray-300 rounded-xl w-75 h-14 gap-3 relative'>
                        <FiSearch size={25} color='lightgray' />
                        <input type="text" placeholder='Поиск...' className='outline-0' value={searchValue} onChange={onChangeOfSearch} />
                        {searchValue && <span className='absolute right-0 mr-3 cursor-pointer overflow-auto bg-white flex items-center justify-center w-10 h-10'
                            onClick={() => setSearchValue('')}>
                            <ImCross color='lightgray' size={16} />
                        </span>}
                    </div>
                </div>

                <div className='flex flex-wrap items-center gap-18 '>
                    {items
                        .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((item, index) => (
                            <ProductCard
                                key={index}
                                onFavorite={(obj) => { addToFavorites(obj) }}
                                onPlus={(obj) => { addToCart(obj) }}
                                {...item}
                                /* это конкотенация, мы передаем все элементы которые не функции или что-либо особое как обьект.
                                Нам не обязательно передовать каждый аргумент вот так
                                title={item.title}
                                price={item.price}
                                img={item.img}
                                id={item.id}*/
                            />
                        ))}
                </div>
            </div>
        </>
    )
}
export default MainPage