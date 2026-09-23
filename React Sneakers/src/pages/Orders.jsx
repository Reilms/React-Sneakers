import React from 'react'
import ProductCard from "../components/ProductCard"
import AppContext from "../Context"
import axios from 'axios';

function Orders() {

    //const { addToFavorites, addToCart } = React.useContext(AppContext)
    const [orders, setOrders] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        const fetchOrders = async () => {
            try {
                const { data } = await axios.get("http://localhost:3001/Orders")
                setOrders(data)    //.reduce((prev, obj) => [...prev, ...obj.items], [])
                setIsLoading(false)
                console.log(data);
            } catch (error) {
                alert("Ошибка призапросе заказов")
                console.error(error);
            }
        }
        fetchOrders()
    }, [])

    return (
        <>
            <div className='p-20 flex flex-col gap-10'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-bold text-4xl '>Ваши заказы:</h1>
                </div>
                <div className='flex flex-wrap items-center gap-18 '>
                    {(isLoading ? [...Array(4)] : orders).map((item, index) => (
                        <ProductCard
                            key={index}
                            loading={isLoading}
                            {...item}
                        />
                    ))}



                    {/* <div className='border border-gray-200 rounded-2xl w-full h-fit p-10 flex flex-col gap-5'
                    >
                        <div>
                            <h1 className='font-bold text-4xl'>Заказ #1</h1>
                        </div>
                        <div className='flex flex-wrap items-center gap-10'>
                            
                        </div>
                    </div> */}
                    {/* {orders.map((item, index) => {

                    })}
 */}


                </div>
            </div>

        </>
    )
}
export default Orders