import React, { createContext, useState } from 'react'
import { getProductData } from './ProductArray';

export const CartContext = createContext({
    item: [],
    getProductQuantity: () => { },
    addOneToCart: () => { },
    removeOneFromCart: () => { },
    deleteFromCart: () => { },
    getTotalCost: () => { },
})

export function CartProvider({ children }) {

    const [cartProducts,setCartProducts] = useState([])

    function getProductQuantity(id){
        const quantity = cartProducts.find(product => product.id === id)?.quantity

        if (quantity == undefined){
            return 0;
        }
        return quantity

    }

    function addOneToCart(id){
        const quantity = getProductQuantity(id)

        if (quantity === 0){
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id : id,
                        quantity : 1
                    }
                ]
            )
        }
        else{
            setCartProducts(
                cartProducts.map(product => product.id === id 
                    ? {...product,quantity:product.quantity + 1} : product)
            )
        }
    }

    function deleteFromCart (id){
        setCartProducts(
            cartProducts => cartProducts.filter(cuurentProduct => {
                return cuurentProduct.id != id;
            })
        )
    }

    function removeOneFromCart (id){
        const quantity = getProductQuantity(id);

        if(quantity == 1){
            deleteFromCart(id);
        }
        else{
            setCartProducts(
                cartProducts.map(product => product.id === id
                ? {...product,quantity:product.quantity - 1}
                : product)
            )
        }
    }

    function getTotalCost(){
        let totalCost = 0;

        cartProducts.map((cartItem)=>{
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity)
        })
        return totalCost
    }

    const contextVaue = {
        item: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost,
    }

    return (
        <CartContext.Provider value={contextVaue}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider