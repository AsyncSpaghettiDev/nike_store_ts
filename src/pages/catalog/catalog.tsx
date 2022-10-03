import './catalog.css'

import { productList } from './products'

import { useEffect, useState } from 'react'
import { IProduct } from '../../types'

import { Product } from '../../components/product'

export const Catalog = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
        setProducts(productList)
    }, [])

    return (
        <div className="catalog">
            <h1 className='catalog_title'>Check our amazing catalog</h1>
            <div className="catalog__products">
                {products.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
        </div>
    )
}
