import { ReactNode, useState } from "react"
import { IProduct, User } from "../types"
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
    const [cart, setCart] = useState<IProduct[]>([])

    const signIn = (user: User) => {
        console.log("signing in")
        setUser(user)
    }

    const signOut = () => {
        console.log("signing out")
        setUser(INITIAL_USER)
    }

    const addToCart = (product: IProduct) => {
        console.log("adding to cart")
        setCart([...cart, product])
        console.log(product)
    }

    const removeFromCart = (product: IProduct) => {
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
        removeFromCart,
        clearCart,
    }

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    )
}