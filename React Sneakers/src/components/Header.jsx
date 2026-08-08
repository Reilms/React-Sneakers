import { BsCart2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";

function Header(props) {
    return (
        <header className='flex items-center justify-between p-14 border-b-2 border-gray-200'>
            <div className='flex items-center justify-center gap-5'>
                <div className='bg-amber-200 w-15 h-15 flex items-center justify-center rounded-full'><div className='bg-center bg-cover bg-[url("/img/Logo.png")] w-10 h-10'></div></div>
                <div>
                    <h3 className='font-bold text-2xl'>REACT SNEAKERS</h3>
                    <p className='text-gray-400 text-lg'>Магазин лучших кроссовок</p>
                </div>
            </div>

            <ul className='flex items-center justify-center gap-10'>
                <li className='flex items-center justify-center gap-3 cursor-pointer'
                onClick={props.onClickCart}>
                    <BsCart2 size={25} color='gray' />
                    <span className='text-gray-500 font-semibold'>1205 сом</span>
                </li>
                <li className='cursor-pointer'><FaRegHeart size={25} color='gray' /></li>
                <li className='cursor-pointer'><CgProfile size={25} color='gray' /></li>

            </ul>
        </header>
    )
}
export default Header