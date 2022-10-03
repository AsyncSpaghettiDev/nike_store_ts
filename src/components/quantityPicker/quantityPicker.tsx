import { useState } from 'react'

import './quantityPicker.css'

export const QuantityPicker = () => {
    // Hooks
    const [quantity, setQuantity] = useState<number>(1)

    // Methods
    const increment = () => setQuantity(quantity + 1)

    const decrement = () => quantity > 1 && setQuantity(quantity - 1)

    return (
        <div className='picker'>
            <button onClick={decrement} className='picker-btn'>-</button>
            <span>{quantity}</span>
            <button onClick={increment} className='picker-btn'>+</button>
        </div>
    )
}