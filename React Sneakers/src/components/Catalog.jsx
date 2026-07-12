import { FiSearch } from "react-icons/fi";
import ProductCard from "./ProductCard";

const Catalog = () => {
    return (
        <main className='p-20 flex flex-col gap-10'>
            <div className='flex items-center justify-between'>
                <h1 className='font-bold text-4xl'>Все кроссовки:</h1>
                <div className='flex items-center justify-center border border-gray-300 rounded-xl w-75 h-14 gap-3'>
                    <FiSearch size={25} color='lightgray' /><input type="text" placeholder='Поиск...' className='outline-0' />
                </div>
            </div>

            <div className='flex flex-wrap items-center gap-18 '>
                <ProductCard 
                name={'Мужские Кроссовки Nike Blazer Mid Suede'}
                price={'12.999 сом'}
                img={'/img/sneakers1.jpg'}/>
                <ProductCard 
                name={'Мужские Кроссовки Nike Blazer Mid Suede'}
                price={'12.999 сом'}
                img={'/img/sneakers1.jpg'}/>
                <ProductCard 
                name={'Мужские Кроссовки Nike Blazer Mid Suede'}
                price={'12.999 сом'}
                img={'/img/sneakers1.jpg'}/>
                <ProductCard 
                name={'Мужские Кроссовки Nike Blazer Mid Suede'}
                price={'12.999 сом'}
                img={'/img/sneakers1.jpg'}/>
            </div>
        </main>
    )
}
export default Catalog