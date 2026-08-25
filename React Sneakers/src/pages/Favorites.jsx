import ProductCard from "../components/ProductCard"


function Favorites({ items, addToFavorites }) {
    return (
        <>
            <div className='p-20 flex flex-col gap-10'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-bold text-4xl '>Избранное:</h1>
                </div>
                <div className='flex flex-wrap items-center gap-18 '>
                    {items.map((item, index) => (
                            <ProductCard
                                key={index}
                                favorited={true}
                                onFavorite={(obj) => { addToFavorites(obj) }}
                                {...item}
                                //что сверху такое посмотри в MainPage.jsx
                            />
                        ))}
                </div>
            </div>

        </>
    )
}
export default Favorites