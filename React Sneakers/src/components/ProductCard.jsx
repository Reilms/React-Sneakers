import { useState, useEffect } from 'react';
import { FaRegHeart, FaPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

function ProductCard(/* {name, price, img} */props) {

    // const OnClickAlert = () => {
    //     alert(props.title)
    // }
    const [isAdded, setIsAdded] = useState(false)

    const onClickPlus = () => {
        setIsAdded(!isAdded)
    }

    return (
        <div className='relative border border-gray-200 rounded-4xl w-60 h-75 flex flex-col justify-center items-center p-6 gap-2 
        hover:shadow-2xl transition-all duration-200 hover:-translate-y-2 ease-in-out '>
            <div className='w-10 h-10 border border-gray-200 flex items-center justify-center absolute left-7 top-7 rounded-xl 
            cursor-pointer' onClick={props.onClickFavorite}>
                <FaRegHeart size={20} color='lightgray' />
            </div>
            <img src={/* img */props.img} alt="" width={133} height={112} />
            <h3 className=' text-lg'>{/* name */props.title}</h3>
            <div className='flex items-center justify-between w-full'>
                <div>
                    <span className='text-sm text-gray-400 '>ЦЕНА:</span>
                    <p className='font-semibold text-lg'>{/* price */props.price} сом</p>
                </div>
                <button className={isAdded ? `bg-green-500 w-9 h-9 flex items-center justify-center rounded-lg cursor-pointer` : 
                `border border-gray-200 w-9 h-9 flex items-center justify-center rounded-lg cursor-pointer`}
                onClick={onClickPlus}
                //onClick={OnClickAlert}
                // если через onCLick нужно передать аргумент то пишем () => {OnClickAlert(аргумент)}
                >{isAdded ? <FaCheck size={15} color='white' /> : <FaPlus color='lightgray' />}</button>
            </div>
            
        </div>
    )
}
export default ProductCard
//Снизу моделька с выбранным сердечком а также зеленой кнопкой


{/* 
<div className='w-10 h-10 bg-red-200 flex items-center justify-center absolute left-7 top-7 rounded-xl cursor-pointer'>
    <FaHeart size={20} color='red' />
</div> 

border border-gray-200 w-9 h-9 flex items-center justify-center rounded-lg
                cursor-pointer

                <FaPlus color='lightgray' />

<button className='bg-green-500 w-9 h-9 flex items-center justify-center rounded-lg
cursor-pointer'><FaCheck size={15} color='white' /></button>

*/}