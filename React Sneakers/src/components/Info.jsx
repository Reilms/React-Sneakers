import React from 'react'
import AppContext from '../Context'
import { FaArrowLeft } from "react-icons/fa6";

const Info = ({ img, title, description }) => {

    const { setOpenSidebar } = React.useContext(AppContext)

    return (
        <div className="flex flex-col items-center justify-center h-full gap-8">
            {img}
            <div className="flex flex-col items-center justify-center gap-3">
                <h1 className="text-2xl font-semibold">{ title }</h1>
                <p className="text-center opacity-40 w-4/5">{ description }</p>
            </div>
            <button type="button" className='h-15 w-full bg-green-600 rounded-2xl cursor-pointer flex items-center justify-center
            hover:bg-green-700 duration-200'
            onClick={() => {setOpenSidebar(false)}}><FaArrowLeft size={20} className='relative -left-15' /> Вернуться назад</button>
        </div>
    )
}

export default Info