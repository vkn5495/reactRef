import React, { useContext } from 'react'
import { CartContext } from './CardContext'
import { getProductData } from './ProductArray'
import { Button } from 'react-bootstrap'

function CartProduct(props) {
  const cart = useContext( CartContext)
  const id = props.id
  const quantity = props.quantity
  const productData =getProductData(id)

  return(
    <>
        <h3>{productData.title}</h3>
        <p>{quantity} total</p>
        <p>$ {(quantity * productData.price)}</p>
        <Button size='sm' onClick={()=> cart.deleteFromCart(id)}>remove</Button>
        <hr /> 
    </>
  )
}

export default CartProduct
