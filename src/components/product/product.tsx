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

import { FC, useContext, useMemo, useState } from 'react'
import { QuantityPicker } from '../../components/quantityPicker'
import { StoreContext } from '../../store'
import { Product as Props } from '../../types'

import './product.css'

export const Product: FC<Props> = ({ id, image, title, description, price, category }) => {
    const [total, setTotal] = useState(price)
    const [quantity, setQuantity] = useState(1)

    const { addToCart } = useContext(StoreContext)
    const updateTotal = (quantity: number): void => {
        setTotal(quantity * price)
        setQuantity(quantity)
    }

    const addToCartHandler = () => {
        const product = { id, image, title, description, price, total, category }
        addToCart(product, quantity)
    }
    const fakePreviousPrice = useMemo(() => price + 10 + Math.floor(Math.random() * 100), [price])

    return (
        <div className='product'>
            <img src={image} alt={title} className='product_image' />
            <div className='product_details'>
                <h3 className='product_title'>{title} ({category}) </h3>
                <div className="product_price"> <s>${fakePreviousPrice.toFixed(2)}</s> ${price.toFixed(2)} </div>
                <div className="product_total"> Total: ${total.toFixed(2)} </div>
            </div>

            <p className='product_description'>{description}</p>
            <div className="product_actions">
                <QuantityPicker onChange={updateTotal} />
                <button className='product_add' onClick={addToCartHandler}>Add to cart</button>
            </div>

        </div>
    )
}