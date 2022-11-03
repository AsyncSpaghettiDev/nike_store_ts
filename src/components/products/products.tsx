import { useState, useEffect } from "react"
import DataService from "../../services/dataService"
import { Product } from "../../types"
import classNames from "./products.module.css"

const INITIAL_PRODUCT: Product = {
    image: '',
    title: '',
    description: '',
    price: 1,
    category: 'men'
}

export const Products = () => {
    const [product, setProduct] = useState<Product>(INITIAL_PRODUCT)
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        new DataService().getCatalog().then(setProducts)
    }, [])

    const handleProductChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target
        const product_value = type === 'number' ? parseFloat(value) : value
        const updated_product = { ...product, [name]: product_value }

        setProduct(updated_product)
    }

    const saveProduct = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const { image } = product
        const new_product = { ...product, image: `/images/products/${image}` }
        const db_product = await new DataService().saveProduct(new_product)
        setProducts(prev => [...prev, db_product])
        console.log(new_product)
        setProduct(INITIAL_PRODUCT)
    }
    return (
        <>
            <h2 className='text-center'>Products</h2>
            <form onSubmit={saveProduct} autoComplete={'off'}>
                <div className={`${classNames.formGroup}`}>
                    <label htmlFor="title">Title</label>
                    <input value={product.title} type="text" name="title" id="title" onChange={handleProductChange} />
                </div>
                <div className={`${classNames.formGroup}`}>
                    <label htmlFor="price">Price</label>
                    <input value={product.price} type="number" min={1} name="price" id="price" onChange={handleProductChange} />
                </div>
                <div className={`${classNames.formGroup}`}>
                    <label htmlFor="image" className={classNames.lbl_img}>Image</label>
                    <input value={product.image} type="text" name="image" id="image" onChange={handleProductChange} />
                </div>
                <div className={`${classNames.formGroup}`}>
                    <label htmlFor="description">Description</label>
                    <textarea rows={3} value={product.description} name="description" id="description" onChange={handleProductChange} />
                </div>
                <div className={`${classNames.formGroup}`}>
                    <label htmlFor="category">Category</label>
                    <input value={product.category} type="text" name="category" id="category" onChange={handleProductChange} />
                </div>
                <div className={`${classNames.formGroup}`}>
                    <button className="btn-primary" type="submit">Save</button>
                </div>
            </form>
            <div className={`${classNames.products}`}>
                {products?.map(product => (
                    <div key={product._id} className={`${classNames.product}`}>
                        <h3>{`${product.title} $${product.price.toFixed(2)} (${product.category})`}</h3>
                        <img src={product.image} alt={product.title} />
                    </div>
                ))}
            </div>
        </>
    )
}