import { useState } from "react"
import { IProduct } from "../../types"
import classNames from "./products.module.css"

const INITIAL_PRODUCT: IProduct = {
    id: 0,
    image: '',
    title: '',
    description: '',
    availableUnits: 1,
    price: 1,
}

export const Products = () => {
    const [product, setProduct] = useState<IProduct>(INITIAL_PRODUCT)
    const [products, setProducts] = useState<IProduct[]>([])

    const handleProductChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target
        const product_value = type === 'number' ? parseFloat(value) : value
        const updated_product = { ...product, [name]: product_value }

        updated_product.id = products.length + 1

        setProduct(updated_product)
    }

    const saveProduct = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const { image } = product
        const new_product = { ...product, image: `/images/products/${image}` }
        setProducts(prev => [...prev, new_product])
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
                    <input value={product.description} type="text" name="description" id="description" onChange={handleProductChange} />
                </div>
                <div className={`${classNames.formGroup}`}>
                    <label htmlFor="availableUnits">Available Units</label>
                    <input value={product.availableUnits} type="number" min={1} name="availableUnits" id="availableUnits" onChange={handleProductChange} />
                </div>
                <div className={`${classNames.formGroup}`}>
                    <button className="btn-primary" type="submit">Save</button>
                </div>
            </form>
            <div className={`${classNames.products}`}>
                {products.map(product => (
                    <div key={product.id} className={`${classNames.product}`}>
                        <h3>{`${product.title} $${product.price.toFixed(2)}`}</h3>
                        <img src={product.image} alt={product.title} />
                        <p>{product.description} |</p>
                        <p>{product.availableUnits} pzs</p>
                    </div>
                ))}
            </div>
        </>
    )
}