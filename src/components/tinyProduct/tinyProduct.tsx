interface Props {
    image: string
    title: string
}

import './tinyProduct.css'

export const TinyProduct = ({ image, title }: Props) => {
    return (
        <li className='product product_tiny'>
            <img src={image} alt={title} className='product_image' />
            <h3 className='product_title'> {title} </h3>
        </li>
    )
}