import { productList } from "./products"

export class DataService {
    getCatalog() {
        return productList;
    }
}

export default DataService