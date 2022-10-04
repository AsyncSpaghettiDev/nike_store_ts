import { useEffect, useState } from 'react'

import classNames from './quantityPicker.module.css'

interface QuantityPickerProps {
    onChange: (quantity: number) => void
    max: number
}

export const QuantityPicker = ({ onChange, max }: QuantityPickerProps) => {
    // Hooks
    const [quantity, setQuantity] = useState<number>(1)

    // Side effects
    useEffect(() => {
        onChange(quantity)
    }, [quantity])


    // Methods
    const increment = () => quantity < max && setQuantity(quantity + 1)

    const decrement = () => quantity > 1 && setQuantity(quantity - 1)

    return (
        <div className={classNames.picker}>
            <button disabled={quantity <= 1} onClick={decrement} className={classNames.picker_btn}>-</button>
            <span>{quantity}</span>
            <button onClick={increment} className={classNames.picker_btn}>+</button>
        </div>
    )
}