// Product interface
export interface IProduct {
    id: number;
    image: string;
    title: string;
    category: string;
    description: string;
    availableUnits: number;
    price: number;
}

export interface Coupon {
    code: string;
    discount: number;
}

export interface Store {
    user: User;
    cart: IProduct[];
    signIn: (user: User) => void;
    signOut: () => void;
    addToCart: (product: IProduct) => void;
    removeFromCart: (product: IProduct) => void;
    clearCart: () => void;
}

export interface User {
    id: number;
    name: string;
    email: string;
}