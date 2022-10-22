import { useContext } from "react";
import { TinyProduct } from "../../components/tinyProduct";
import { StoreContext } from "../../store";

export const Cart = () => {
    const { cart } = useContext(StoreContext);
    return (
        <div className="px-3 py-2">
            <h1>Your feet will love them</h1>
            <p>Here are the shoes you've added to your cart</p>
            <div className="d-flex gap-2">
                {cart.map((product) => (
                    <TinyProduct key={product.id} image={product.image} title={product.title}></TinyProduct>
                ))}
            </div>
        </div>
    )
}