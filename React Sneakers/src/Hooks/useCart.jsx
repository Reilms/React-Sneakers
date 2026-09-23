import React from 'react'
import AppContext from '../Context'

export const useCart = () => {
    const { cartItems, setCartItems } = React.useContext(AppContext)
    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0)

    return { cartItems, setCartItems, totalPrice }
}
// Мы создаем свой хук как к примеру useState, только он передает переменную и функцию любую, а мы 3 фиксированиые вещи