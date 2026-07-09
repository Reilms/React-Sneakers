import './App.css'
import { BsCart2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import {
  FaRegHeart,
  FaPlus
} from "react-icons/fa";

function App() {

  return (
    <>
      <div className='bg-white m-25 rounded-2xl'>
        <header className='flex items-center justify-between p-14 border-b-2 border-gray-200'>
          <div className='flex items-center justify-center gap-5'>
            <div className='bg-amber-200 w-15 h-15 flex items-center justify-center rounded-full'><div className='bg-center bg-cover bg-[url("/img/Logo.png")] w-10 h-10'></div></div>
            <div>
              <h3 className='font-bold text-2xl'>REACT SNEAKERS</h3>
              <p className='text-gray-400 text-lg'>Магазин лучших кроссовок</p>
            </div>
          </div>

          <ul className='flex items-center justify-center gap-10'>
            <li className='flex items-center justify-center gap-3 cursor-pointer'>
              <BsCart2 size={25} color='gray' />
              <span className='text-gray-500 font-semibold'>1205 сом</span>
            </li>
            <li className='cursor-pointer'><FaRegHeart size={25} color='gray' /></li>
            <li className='cursor-pointer'><CgProfile size={25} color='gray' /></li>

          </ul>
        </header>
        <main className='p-20 flex flex-col gap-10'>
          <h1 className='font-bold text-4xl'>Все кроссовки:</h1>
          <div className='flex flex-wrap items-center gap-18'>
            <div className='border border-gray-300 rounded-4xl w-60 h-75  flex flex-col justify-center items-center p-6 gap-2 '>
              <img src="/img/sneakers1.jpg" alt="" width={133} height={112} />
              <h3 className=' text-lg'>Мужские Кроссовки Nike Blazer Mid suede</h3>
              <div className='flex items-center justify-between w-full'>
                <div>
                  <span className='text-sm text-gray-400 '>ЦЕНА:</span>
                  <p className='font-semibold text-lg'>12.999 сом</p>
                </div>
                <button className='border border-[#D3D3D3] w-9 h-9 flex items-center justify-center rounded-lg
               cursor-pointer'><FaPlus color='lightgray' /></button>
              </div>
              {/* <div>Сердечко</div> */}
            </div>

            <div className='border border-gray-300 rounded-4xl w-60 h-75  flex flex-col justify-center items-center p-6 gap-2'>
              <img src="/img/sneakers2.jpg" alt="" width={133} height={112} />
              <h3 className=' text-lg'>Мужские Кроссовки Nike Blazer Mid suede</h3>
              <div className='flex items-center justify-between w-full'>
                <div>
                  <span className='text-sm text-gray-400 '>ЦЕНА:</span>
                  <p className='font-semibold text-lg'>12.999 сом</p>
                </div>
                <button className='border border-[#D3D3D3] w-9 h-9 flex items-center justify-center rounded-lg
               cursor-pointer'><FaPlus color='lightgray' /></button>
              </div>
              {/* <div>Сердечко</div> */}
            </div>

            <div className='border border-gray-300 rounded-4xl w-60 h-75  flex flex-col justify-center items-center p-6 gap-2'>
              <img src="/img/sneakers3.jpg" alt="" width={133} height={112} />
              <h3 className=' text-lg'>Мужские Кроссовки Nike Blazer Mid suede</h3>
              <div className='flex items-center justify-between w-full'>
                <div>
                  <span className='text-sm text-gray-400 '>ЦЕНА:</span>
                  <p className='font-semibold text-lg'>12.999 сом</p>
                </div>
                <button className='border border-[#D3D3D3] w-9 h-9 flex items-center justify-center rounded-lg
               cursor-pointer'><FaPlus color='lightgray' /></button>
              </div>
              {/* <div>Сердечко</div> */}
            </div>

            <div className='border border-gray-300 rounded-4xl w-60 h-75  flex flex-col justify-center items-center p-6 gap-2'>
              <img src="/img/sneakers4.jpg" alt="" width={133} height={112} />
              <h3 className=' text-lg'>Мужские Кроссовки Nike Blazer Mid suede</h3>
              <div className='flex items-center justify-between w-full'>
                <div>
                  <span className='text-sm text-gray-400 '>ЦЕНА:</span>
                  <p className='font-semibold text-lg'>12.999 сом</p>
                </div>
                <button className='border border-[#D3D3D3] w-9 h-9 flex items-center justify-center rounded-lg
               cursor-pointer'><FaPlus color='lightgray' /></button>
              </div>
              {/* <div>Сердечко</div> */}
            </div>

          </div>
        </main>
      </div>
    </>
  )
}

export default App
