import React, { createContext, useReducer, useState} from 'react';
import { CartReducer } from '../config/CartReducer'

export const CartContext =  createContext()

export const CartContextProvider = ({children}) => {

    const [ cart, dispatch ] = useReducer(CartReducer, {shoppingCart : [], totalQty : 0, totalPrice : 0})

    return (
        <CartContext.Provider value={{...cart, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

