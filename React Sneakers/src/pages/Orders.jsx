import React from 'react'
import ProductCard from "../components/ProductCard"
import axios from 'axios';
import Info from '../components/Info';
import { PiReceiptX } from "react-icons/pi";

function Orders() {
    const [orders, setOrders] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    
    React.useEffect(() => {
        const fetchOrders = async () => {
            try {
                const { data } = await axios.get("http://localhost:3001/Orders")
                setOrders(data)
                setIsLoading(false)
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
                {
                    orders.length > 0 ? (<>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold text-4xl '>Ваши заказы:</h1>
                        </div>
                        <div className='flex flex-wrap items-center gap-18 '>
                            {(isLoading ? [...Array(2)] : orders).map((order, orderNumber) => (
                                <div className='border border-gray-200 rounded-2xl w-full h-fit p-10 flex flex-col gap-5' key={order.id}>
                                    <div>
                                        <h1 className='font-bold text-4xl'>Заказ #{orderNumber + 1}</h1>
                                    </div>
                                    <div className='flex flex-wrap items-center gap-10'>
                                        {
                                            order.items.map(item => (
                                                <ProductCard
                                                    key={item.id}
                                                    loading={isLoading}
                                                    {...item}
                                                />
                                            ))
                                        }
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>) : (<Info
                        img={<PiReceiptX size={150} color='red' />}
                        title={"У вас нет заказов"}
                        description={"Заказанные вами товары появятся здесь"} />)
                }
            </div>

        </>
    )
}
export default Orders
{/*  */ }
{/* {orders.map((item, index) => {

                                 })}
                            */}
{/* <ProductCard
                                    key={index}
                                    loading={isLoading}
                                    {...item}
                                /> */}