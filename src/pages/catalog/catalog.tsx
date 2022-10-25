import classNames from './catalog.module.css'

import { DataService } from '../../services/dataService'

import { useEffect, useState } from 'react'
import { Product as IProduct } from '../../types'

import { Product } from '../../components/product'

export const Catalog = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
        console.log('Catalog was loaded')
        const dataService = new DataService()
        setProducts(dataService.getCatalog())
    }, [])

    return (
        <div className={classNames.catalog}>
            <h1 className={classNames.title}>Check our amazing catalog</h1>
            <h2 className={classNames.subtitle}>We have {products.length} amazing products waiting for you </h2>
            <div className={classNames.products}>
                {products.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
        </div>
    )
}
