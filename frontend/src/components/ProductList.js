import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import Rating from './Rating'

import { Link } from 'react-router-dom'

const ProductList = ({ product }) => {
    return (
            <Link to={`/product/${product._id}`}>
        <ListGroup.Item display="flex" justifyContent="between">
                <ListGroup.Img src={product.image} variant='top' />
                    <ListGroup.Title as='div'>
                        <strong>{product.name}</strong>
                    </ListGroup.Title>
                    <Rating
                        value={product.rating}
                        text={`${product.numReviews} reviews`}
                    />
               
                <Card.Text as='h3'>${product.price}</Card.Text>
        </ListGroup.Item>
            </Link>
    )
}

export default ProductList
