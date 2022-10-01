import './quantityPicker.css'

export const QuantityPicker = () => {
    return (
        <div className='picker'>
            <button className='picker-btn'>-</button>
            <span>1</span>
            <button className='picker-btn'>+</button>
        </div>
    )
}