import { useEffect, useState } from "react"
import DataService from "../../services/dataService"
import { Product } from "../../types"
import { TinyProduct } from "../../components/tinyProduct"

import classNames from './wishlist.module.css'

export const Wishlist = () => {
    const [catalog, setCatalog] = useState<Product[]>([])
    const [wishlist, setWishlist] = useState<Product[]>([])
    const [productSearch, setProductSearch] = useState<string>("")

    useEffect(() => {
        const dataService = new DataService()
        setCatalog(dataService.getCatalog())
    }, [])

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setProductSearch(e.target.value)

    const searchProduct = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (productSearch.trim() === '' || productSearch.length < 3)
            return alert('Please enter a product name')

        const product = catalog.find((product) => product.title.toLowerCase().includes(productSearch.toLowerCase()))
        setProductSearch("")

        if (product === undefined)
            return alert("Product not found")

        product != undefined && addToWishlist(product)
    }

    const addToWishlist = (product: Product) => {
        // Check if product is already in wishlist
        const productInWishlist = wishlist.find((item) => item.title.toLowerCase() === product.title.toLowerCase())
        if (productInWishlist === undefined)
            return setWishlist([...wishlist, product])

        alert("Product already in wishlist")
    }

    return (
        <div className={classNames.wishlist}>
            <h4 className={classNames.title}>My Wish List</h4>
            <form onSubmit={searchProduct} className={classNames.searchbar}>
                <label htmlFor="add_product">Enter a product name to add to your wish list</label>
                <input id="add_product" onChange={handleSearch} value={productSearch} type="text" placeholder="Type the product name" />
                <button>Add</button>
            </form>
            <div className={classNames.items}>
                {wishlist.map((product) => (
                    <TinyProduct key={product.id} image={product.image} title={product.title}></TinyProduct>
                ))}

            </div>
        </div>
    )
}