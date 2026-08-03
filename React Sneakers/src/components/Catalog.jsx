import { FiSearch } from "react-icons/fi";
import ProductCard from "./ProductCard";

const Catalog = () => {

    const sneakers = [
        {
            title: 'Мужские Кроссовки Nike Blazer Mid Suede',
            price:  12.999,
            img: '/img/sneakers1.jpg',
        },
        {
            title: 'Мужские Кроссовки Nike Air Max 270',
            price:  12.499,
            img: '/img/sneakers2.jpg',
        },
        {
            title: 'Мужские Кроссовки Nike Blazer Mid Suede',
            price:  8.499,
            img: '/img/sneakers3.jpg',
        },
        {
            title: 'Кроссовки Puma X Aka Boku Future rider',
            price:  8.999,
            img: '/img/sneakers4.jpg',
        },
    ]
    // sneakers - это временная замена BackEnd или API


    return (
        <main className='p-20 flex flex-col gap-10'>
            <div className='flex items-center justify-between'>
                <h1 className='font-bold text-4xl'>Все кроссовки:</h1>
                <div className='flex items-center justify-center border border-gray-300 rounded-xl w-75 h-14 gap-3'>
                    <FiSearch size={25} color='lightgray' /><input type="text" placeholder='Поиск...' className='outline-0' />
                </div>
            </div>

            <div className='flex flex-wrap items-center gap-18 '>
                {sneakers.map(item => (
                    <ProductCard
                    title={item.title}
                    price={item.price}
                    img={item.img}
                    onClick={() => {alert(item.title)}}
                    />
                ))}
            </div>
        </main>
    )
}
export default Catalog


{/* <ProductCard
                    title={'Мужские Кроссовки Nike Blazer Mid Suede'}
                    price={12.999}
                    img={'/img/sneakers1.jpg'} />
                <ProductCard
                    title={'Мужские Кроссовки Nike Air Max 270'}
                    price={12.999}
                    img={'/img/sneakers2.jpg'} />
                <ProductCard
                    title={'Мужские Кроссовки Nike Blazer Mid Suede'}
                    price={8.499}
                    img={'/img/sneakers3.jpg'} />
                <ProductCard
                    title={'Кроссовки Puma X Aka Boku Future rider'}
                    price={8.999}
                    img={'/img/sneakers4.jpg'} /> */}