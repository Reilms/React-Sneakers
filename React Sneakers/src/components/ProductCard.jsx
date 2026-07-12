import { FaRegHeart, FaPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const ProductCard = ({name, price, img}) => {
    return (
        <div className='relative border border-gray-300 rounded-4xl w-60 h-75 flex flex-col justify-center items-center p-6 gap-2 
        hover:shadow-2xl transition-all duration-200 hover:-translate-y-2 ease-in-out '>
            <div className='w-10 h-10 border border-gray-300 flex items-center justify-center absolute left-7 top-7 rounded-xl cursor-pointer'>
                <FaRegHeart size={20} color='lightgray' />
            </div>
            <img src={img} alt="" width={133} height={112} />
            <h3 className=' text-lg'>{name}</h3>
            <div className='flex items-center justify-between w-full'>
                <div>
                    <span className='text-sm text-gray-400 '>ЦЕНА:</span>
                    <p className='font-semibold text-lg'>{price}</p>
                </div>
                <button className='border border-[#D3D3D3] w-9 h-9 flex items-center justify-center rounded-lg
                cursor-pointer'><FaPlus color='lightgray' /></button>
            </div>
        </div>
    )
}
export default ProductCard
//Снизу моделька с выбранным сердечком а также зеленой кнопкой

{/* <div className='relative border border-gray-300 rounded-4xl w-60 h-75 flex flex-col justify-center items-center p-6 gap-2 
            hover:shadow-2xl transition-all duration-200 hover:-translate-y-2 ease-in-out '>
                    <div className='w-10 h-10 bg-red-200 flex items-center justify-center absolute left-7 top-7 rounded-xl cursor-pointer'>
                        <FaHeart size={20} color='red' />
                    </div>
                    <img src="/img/sneakers1.jpg" alt="" width={133} height={112} />
                    <h3 className='text-lg'>Мужские Кроссовки Nike Blazer Mid suede</h3>
                    <div className='flex items-center justify-between w-full'>
                        <div>
                            <span className='text-sm text-gray-400 '>ЦЕНА:</span>
                            <p className='font-semibold text-lg'>12.999 сом</p>
                        </div>
                        <button className='border border-[#D3D3D3] w-9 h-9 flex items-center justify-center rounded-lg
               cursor-pointer'><FaPlus color='lightgray' /></button>
                    </div>
                </div>

                <div className='relative border border-gray-300 rounded-4xl w-60 h-75 flex flex-col justify-center items-center p-6 gap-2 
            hover:shadow-2xl transition-all duration-200 hover:-translate-y-2 ease-in-out'>
                    <div className='w-10 h-10 border border-gray-300 flex items-center justify-center absolute left-7 top-7 rounded-xl cursor-pointer'>
                        <FaRegHeart size={20} color='lightgray' />
                    </div>
                    <img src="/img/sneakers2.jpg" alt="" width={133} height={112} />
                    <h3 className=' text-lg'>Мужские Кроссовки Nike Air Max 270</h3>
                    <div className='flex items-center justify-between w-full'>
                        <div>
                            <span className='text-sm text-gray-400 '>ЦЕНА:</span>
                            <p className='font-semibold text-lg'>12.999 сом</p>
                        </div>
                        <button className='bg-green-500 w-9 h-9 flex items-center justify-center rounded-lg
               cursor-pointer'><FaCheck size={15} color='white' /></button>
                    </div>
                </div> */}