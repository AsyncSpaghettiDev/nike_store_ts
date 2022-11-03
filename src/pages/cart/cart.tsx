import { useContext } from "react"
import { TinyProduct } from "../../components/tinyProduct"
import { StoreContext } from "../../store"
import classNames from './cart.module.css'

export const Cart = () => {
    const { cart, getCount, getTotal } = useContext(StoreContext)
    return (
        <div className="px-3 py-2">
            <h1>Your feet will love them</h1>
            <p>Here are the {getCount()} shoes you've added to your cart</p>
            <div className="d-flex gap-4">
                <div className={`${classNames.products} d-flex gap-2 flex-wrap justify-content-evenly`}>
                    {cart.map((product) => (
                        <TinyProduct key={product._id} image={product.image} title={product.title} quantity={product.quantity} price={product.price} ></TinyProduct>
                    ))}
                </div>
                <div className={`${classNames.receipt} d-flex flex-column`}>
                    <h3>Total</h3>
                    <table className={classNames.table}>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((product) => (
                                <tr key={product._id}>
                                    <td>{product.title}</td>
                                    <td className="text-center">{product.quantity}</td>
                                    <td className="text-center">${(product.price * product.quantity).toFixed(2)}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2}>Total</td>
                                <td>${getTotal().toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>

                    <hr />
                    <button className="btn btn-primary">Checkout</button>
                </div>
            </div>

        </div>
    )
}