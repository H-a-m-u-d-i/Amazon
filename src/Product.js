import React, { useState } from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating}) {

    const [{basket}, dispatch] = useStateValue();  //we are pulling and pushing from the data layer...basket--for--pulling data from data layer...dispatch--for--pushing data to the data layer

    // console.log('this is the basket',  basket)
    const addToBasket=() => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    }
  return (
    <div className="product">
        <div className="product__info">
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
                <div className='product__rating'>
                    {Array(rating)  //it creates ana array that can carry "rating"(for e.g. =6) amount of items..its length
                        .fill()  
                        // .map(() => {
                        //     <p>🌟</p>
                        // })
                    } 
                    {/* it fills the amount of rating in the array with the star icon */}
                </div> 
        </div>
        <img src={image}alt=''/>
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product