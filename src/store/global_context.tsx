import { ReactNode, useState } from "react"
import { Cart_Product, Product, User } from "../types"
import { StoreContext } from "./context"

interface Props {
    children: ReactNode
}

const INITIAL_USER: User = {
    id: 0,
    name: "Jonathan",
    email: "test@mail.com",
}

export const GlobalContext = ({ children }: Props) => {
    const [user, setUser] = useState<User>(INITIAL_USER)
    const [cart, setCart] = useState<Cart_Product[]>([])

    const signIn = (user: User) => {
        console.log("signing in")
        setUser(user)
    }

    const signOut = () => {
        console.log("signing out")
        setUser(INITIAL_USER)
    }

    const getCount = (): number => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    const addToCart = (product: Product, quantity: number = 1) => {
        console.log("adding to cart")
        const productInCart = cart.find((item) => item.id === product.id)
        if (productInCart) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                )
            )
        } else {
            setCart([...cart, { ...product, quantity: quantity }])
        }
        console.log(product)
    }

    const getTotal = (): number => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    }

    const removeFromCart = (product: Product) => {
        console.log("removing from cart")
        setCart(cart.filter((item) => item.id !== product.id))
    }

    const clearCart = () => {
        console.log("clearing cart")
        setCart([])
    }

    const value = {
        user,
        cart,
        signIn,
        signOut,
        addToCart,
        getCount,
        removeFromCart,
        clearCart,
        getTotal,
    }

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    )
}