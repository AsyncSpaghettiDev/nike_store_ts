/**
 * Must have an image
 * Must have a title
 * Must have a price
 * Must have a total
 * Must have a quantity
 * Must have a button to add to cart
 * 
 * @returns a product card
 */

import { FC } from 'react'
import { QuantityPicker } from '../../components/quantityPicker'
import { IProduct } from '../../types'

import './product.css'

const fakePreviousPrice = (currentPrice: number): number => {
    return currentPrice + 10 + Math.floor(Math.random() * 100)
}

export const Product: FC<IProduct> = ({ image, title, description, price }) => {
    return (
        <div className='product'>
            <img src={image} alt={title} className='product_image' />
            <h3 className='product_title'>{title} </h3>
            <div className="product_price"> <s>${fakePreviousPrice(price)}</s> ${price} </div>
            <p className='product_description'>{description}</p>
            <div className="product_actions">
                <QuantityPicker />
                <button className='product_add'>Add to cart</button>
            </div>
        </div>
    )
}