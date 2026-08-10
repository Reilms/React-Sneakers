import { ImCross } from "react-icons/im";
import { FaArrowRight } from "react-icons/fa6";

function CartSidebar({onClose, items = [] }) {
    return (
        <>
            <aside className='bg-white h-screen w-100 fixed right-0 top-0 border shadow-2xl z-10 p-7 flex flex-col'>
                <div className='flex items-center justify-between mb-10'>
                    <h3 className='font-semibold text-2xl'>Корзина</h3>
                    <button className='w-10 h-10 cursor-pointer'
                        onClick={onClose}
                    ><ImCross color='black' size={20} /></button>
                </div>

                <div className='flex flex-col flex-1 gap-5 overflow-auto scrollbar-none '>
                    {items.map((obj) => (
                        <div className='border-2 border-gray-200 rounded-xl flex items-center justify-betwee w-full h-30 gap-4 p-4'>
                            <img src={obj.img} alt="" width={70} height={70} />
                            <div className='flex flex-col gap-2'>
                                <h3>{obj.title}</h3>
                                <p className='font-bold'>{obj.price} сом</p>
                            </div>
                            <button className='border border-[#D3D3D3] min-w-9 min-h-9 flex items-center justify-center rounded-lg
                        cursor-pointer'><ImCross color='lightgray' size={12} /></button>
                        </div>
                    ))}
                </div>

                <div className='flex flex-col gap-5 mt-10'>
                    <ul className='flex flex-col gap-4'>
                        <li className='flex items-center justify-between gap-2'>
                            <span>Итого:</span>
                            <div className='h-px grow border border-dashed border-gray-400 relative top-2 '></div>
                            <p >21.498 сом</p>
                        </li>
                        <li className='flex items-center justify-between gap-2'>
                            <span>Налог 5%:</span>
                            <div className='h-px grow border border-dashed border-gray-400 relative top-2 '></div>
                            <p>1.074 сом</p>
                        </li>
                    </ul>
                    <button className='h-15 w-full bg-green-600 rounded-2xl cursor-pointer flex items-center justify-center
          hover:bg-green-700 duration-200'>Оформить заказ <FaArrowRight size={20} className='relative -right-15' /></button>
                </div>
            </aside>
            <div className='bg-black h-screen w-screen fixed left-0 top-0 z-5 opacity-50'
                onClick={onClose}
            ></div>
        </>
    )
}
export default CartSidebar

{/* <div className='border-2 border-gray-200 rounded-xl flex items-center justify-betwee w-full h-30 gap-4 p-4'>
                        <img src="/img/sneakers2.jpg" alt="" width={70} height={70} />
                        <div className='flex flex-col gap-2'>
                            <h3>Мужские Кроссовки Nike Air Max 270</h3>
                            <p className='font-bold'>12.999 сом</p>
                        </div>
                        <button className='border border-[#D3D3D3] min-w-9 min-h-9 flex items-center justify-center rounded-lg
                        cursor-pointer'><ImCross color='lightgray' size={12} /></button>
                    </div> */}