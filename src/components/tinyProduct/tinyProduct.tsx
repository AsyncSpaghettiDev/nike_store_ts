interface Props {
    image: string
    title: string
    quantity?: number
    price?: number
}

import './tinyProduct.css'

export const TinyProduct = ({ image, title, quantity, price }: Props) => {
    return (
        <div className='product product_tiny'>
            <img src={image} alt={title} className='product_image' />
            <h3 className='product_title'> {title} </h3>
            {
                quantity && price &&
                <p className='product_quantity'>
                    {`${quantity} pieces`} ({`$${price}.00`} each)
                </p>}
        </div>
    )
}