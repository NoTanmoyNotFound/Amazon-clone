import React from 'react'
import "./Product.css"

function Product() {
    return (
        <div className='product'>
            <div className="product__info">
                <p>Steve Jobs by Walter Isaacson [Hardcover]</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>499</strong>
                </p>
                <div className="proudct__rating">
                    <p>⭐</p>
                    
                </div>
                <img src="https://m.media-amazon.com/images/I/51iau+M4IBL._AC_UY218_.jpg" alt="" />
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product
