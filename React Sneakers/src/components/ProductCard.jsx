import { useState, useContext } from 'react';
import { FaRegHeart, FaPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import ProductCardSkeleton from './ProductCardSkeleton';
import AppContext from '../Context';

function ProductCard({
    title,
    price,
    img,
    id,
    onFavorite,
    onPlus,
    loading = false
}) {

    const { isItemAdded } = useContext(AppContext)
    const { isItemFavorited } = useContext(AppContext)
    const obj = { title, price, img, id }

    const onClickPlus = () => {
        onPlus(obj)
    }

    const onClickFavorite = () => {
        onFavorite(obj)
    }

    return (
        <div className='relative border border-gray-200 rounded-4xl w-60 h-75 flex flex-col justify-center items-center p-6 gap-2 
        hover:shadow-2xl transition-all duration-200 hover:-translate-y-2 ease-in-out '>
            {loading ? <ProductCardSkeleton /> : <>
            {
                isItemFavorited(id) ? (
                    onFavorite && <div className='w-10 h-10  bg-red-200 flex items-center justify-center absolute left-7 top-7 rounded-xl 
                    cursor-pointer' onClick={onClickFavorite}>
                        <FaHeart size={20} color='red' />
                    </div>) : (
                    onFavorite && <div className='w-10 h-10 border border-gray-200 flex items-center justify-center absolute left-7 top-7 rounded-xl 
                    cursor-pointer' onClick={onClickFavorite}>
                        <FaRegHeart size={20} color='lightgray' />
                    </div>)
            }
                <img src={img} alt="" width={133} height={112} />
                <h3 className=' text-lg'>{title}</h3>
                <div className='flex items-center justify-between w-full'>
                    <div>
                        <span className='text-sm text-gray-400 '>ЦЕНА:</span>
                        <p className='font-semibold text-lg'>{price} сом</p>
                    </div>
                    {onPlus && <button type='button' className={isItemAdded(id) ? `bg-green-500 w-9 h-9 flex items-center justify-center rounded-lg cursor-pointer` :
                        `border border-gray-200 w-9 h-9 flex items-center justify-center rounded-lg cursor-pointer`}
                        onClick={onClickPlus}
                    >{isItemAdded(id) ? <FaCheck size={15} color='white' /> : <FaPlus color='lightgray' />}</button>}
                </div>
                </>}

        </div>
    )
}
export default ProductCard
