// Product interface
export interface Product {
    id: number;
    image: string;
    title: string;
    category: string;
    description: string;
    price: number;
}

export interface Coupon {
    code: string;
    discount: number;
}

export interface Cart_Product extends Product {
    quantity: number;
}

export interface Store {
    user: User;
    cart: Cart_Product[];
    signIn: (user: User) => void;
    signOut: () => void;
    addToCart: (product: Product, quantity?: number) => void;
    getCount: () => number;
    getTotal: () => number;
    removeFromCart: (product: Product) => void;
    clearCart: () => void;
}

export interface User {
    id: number;
    name: string;
    email: string;
}