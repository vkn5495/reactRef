import React, { useContext } from 'react'
import { Button, Card, Row, Form, Col } from 'react-bootstrap'
import { CartContext } from './CardContext';

function ProductCard(props) {
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id)
    return (
        <Card>
            <Card.Body>
                <Card.Title >{product.title}</Card.Title>
                <Card.Text >${product.price}</Card.Text>
                {productQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <Form.Label column='ture' sm='6'>in cart : {productQuantity}</Form.Label>
                            <Col sm='6'>
                                <Button className='mx-2' sm='6' onClick={() => cart.addOneToCart(product.id)}>+</Button>
                                <Button className='mx-2' sm='6' onClick={() => cart.removeOneFromCart(product.id)}>-</Button>
                            </Col>
                            <Button className='mx-6' variant='danger' onClick={() => cart.deleteFromCart(product.id)}>remove from cart</Button>
                        </Form>
                    </> :
                    <Button variant='primary' onClick={()=> cart.addOneToCart(product.id)}>add to cart</Button>
                }
            </Card.Body>
        </Card>
    )
}

export default ProductCard
