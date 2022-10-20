// Product interface
export interface IProduct {
    id: number;
    image: string;
    title: string;
    description: string;
    availableUnits: number;
    price: number;
}

export interface Coupon {
    code: string;
    discount: number;
}