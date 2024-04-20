import React from 'react'
import "./Product.css"
import { Height } from '@mui/icons-material'
import { height } from '@mui/system'

function Product({ title, image, price, rating }) {
    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="proudct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}

                </div>

            </div>
            <img  src={image}  />
            <button>Add to Cart</button>
        </div>
    )
}

export default Product
