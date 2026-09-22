import { useContext } from "react"
import ProductCard from "../components/ProductCard"
import AppContext from "../Context"


function Favorites() {
    const { favoriteItems, addToFavorites} = useContext(AppContext)

    return (
        <>
            <div className='p-20 flex flex-col gap-10'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-bold text-4xl '>Избранное:</h1>
                </div>
                <div className='flex flex-wrap items-center gap-18 '>
                    {favoriteItems.map((item) => (
                        <ProductCard
                            key={item.id}
                            favorited={true}
                            onFavorite={(obj) => { addToFavorites(obj) }}
                            title={item.title}
                            price={item.price}
                            img={item.img}
                            id={item.parentId}
                        />
                    ))}
                </div>
            </div>

        </>
    )
}
export default Favorites