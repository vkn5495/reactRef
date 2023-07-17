import React, { useContext, useState } from 'react'
import { Navbar, Button, Modal } from 'react-bootstrap'
import { CartContext } from './other/CardContext'
import CartProduct from './other/CartProduct'

function NavBarComponent() {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const cart = useContext(CartContext)
  const productsCount = cart.item.reduce((sum, product) => sum + product.quantity, 0)
  return (
    <>
      <Navbar expand='sm'>
        <Navbar.Brand href='/'>ecommerce store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Button onClick={handleShow}>cart {productsCount} items</Button>
        </Navbar.Collapse>
      </Navbar>
      < Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>shopping cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>this is the modal body</h1>
          {productsCount > 0 ?
            <>
              <p>items is your cart :</p>
              { cart.item.map((currentProduct,idx)=>(
                <CartProduct id={currentProduct.id} quantity={currentProduct.quantity} key={idx}/>
              ))}
              <h1>total : ${cart.getTotalCost()}</h1>
              <Button variant='success'>purchase items!</Button>
            </> :
            <h1>there are no items in cart</h1>
          }
        </Modal.Body>
      </Modal>
    </>
  )
}

export default NavBarComponent
