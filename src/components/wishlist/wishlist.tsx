import { useEffect, useState } from "react"
import DataService from "../../services/dataService"
import { IProduct } from "../../types"
import { TinyProduct } from "../tinyProduct"

import classNames from './wishlist.module.css'

export const Wishlist = () => {
    const [catalog, setCatalog] = useState<IProduct[]>([])
    const [wishlist, setWishlist] = useState<IProduct[]>([])
    const [productSearch, setProductSearch] = useState<string>("")

    useEffect(() => {
        const dataService = new DataService()
        setCatalog(dataService.getCatalog())
    }, [])

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setProductSearch(e.target.value)

    const searchProduct = () => {
        const product = catalog.find((product) => product.title.toLowerCase() === productSearch.toLowerCase())
        setProductSearch("")

        if (product === undefined)
            return alert("Product not found")
        product != undefined && addToWishlist(product)
    }

    const addToWishlist = (product: IProduct) => {
        // Check if product is already in wishlist
        const productInWishlist = wishlist.find((item) => item.title.toLowerCase() === product.title.toLowerCase())
        if (productInWishlist === undefined)
            return setWishlist([...wishlist, product])

        alert("Product already in wishlist")

    }

    return (
        <div className={classNames.wishlist}>
            <h4 className={classNames.title}>My Wish List</h4>
            <div className={classNames.searchbar}>
                <label htmlFor="">Enter a product name to add to your wish list</label>
                <input onChange={handleSearch} value={productSearch} type="text" placeholder="Type the product name" />
                <button onClick={searchProduct}>Add</button>
            </div>
            <ul className={classNames.items}>
                {wishlist.map((product) => (
                    <TinyProduct key={product.id} image={product.image} title={product.title}></TinyProduct>
                ))}

            </ul>
        </div>
    )
}