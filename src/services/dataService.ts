import axios from "axios"
import { Coupon, Product } from "../types"
import { productList } from "./products"

export class DataService {
    async getCatalog() {
        // use this line to work with the mock data
        // return productList

        // use this line to work with the real data
        const res = await axios.get<Product[]>("http://localhost:5000/api/catalog")
        return res.data
    }

    async saveProduct(product: Product) {
        const res = await axios.post<Product>("http://localhost:5000/api/catalog", product)
        return res.data
    }

    async saveCoupon(coupon: Coupon) {
        const res = await axios.post<Coupon>("http://localhost:5000/api/coupons", coupon)
        return res.data
    }

    async getCoupons() {
        const res = await axios.get<Coupon[]>("http://localhost:5000/api/coupons")
        return res.data
    }
}

export default DataService