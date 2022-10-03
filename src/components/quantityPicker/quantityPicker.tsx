import { useEffect, useState } from 'react'

import './quantityPicker.css'

interface QuantityPickerProps {
    onChange: (quantity: number) => void
}

export const QuantityPicker = ({ onChange }: QuantityPickerProps) => {
    // Hooks
    const [quantity, setQuantity] = useState<number>(1)

    // Side effects
    useEffect(() => {
        onChange(quantity)
    }, [quantity])


    // Methods
    const increment = () => setQuantity(quantity + 1)

    const decrement = () => quantity > 1 && setQuantity(quantity - 1)

    return (
        <div className='picker'>
            <button disabled={quantity <= 1} onClick={decrement} className='picker-btn'>-</button>
            <span>{quantity}</span>
            <button onClick={increment} className='picker-btn'>+</button>
        </div>
    )
}