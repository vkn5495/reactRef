import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { productsArray } from '../other/ProductArray'
import ProductCard from '../other/ProductCard'

function Store() {
    return (
        <>
            <h2>welcome to the store</h2>
            <Row xs={1} md={3} className='g-4'>
                {productsArray.map((product, idx) => (
                    <Col align='center' key={idx}>
                         <ProductCard product={product}/>
                    </Col>
                ))}

            </Row>
        </>
    )
}

export default Store
