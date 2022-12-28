
export const FREE_SHIPPING_AMOUNT = 300000;

export enum ISideCartStatus {
    OPEN = 'open',
    CLOSE = 'close'
}
export enum ICartShippingStatus {
    PENDING = 'pending',
    FIXED_PRICE = 'fixed',
    FREE_BY_AMOUNT = 'free_by_amount',
    FREE_BY_COUPON = 'free_by_coupon'
}


// Cart
export type ICart = {
    status: ISideCartStatus;
    user: ICartUser;
    shipping: ICartShipping;
    overview: ICartOverview;
    products: ICartProduct[];
};






// Products
export type ICartProduct = {
    id: number,
    sku: string;
    slug: string;

    created_at: string;
    updated_at: string;

    shop_type: string;

    title: string;
    brand: string;
    description: string;
    ingredients: string;
    image1_src: string;
    image2_src: string;
    image3_src: string;
    image4_src: string;

    price:  number,
    discount: number,
    quantity:  number,
    stock:  number,

    isDuo: boolean,
    productA_id: any,
    productB_id: any
};

// Overview
export type ICartOverview = {
    total_points: number;
    total_price: number;
    shipping_price: number;
    taxes_price: number;
    subtotal_price: number;
    shipping_status:ICartShippingStatus;
    shipping_missing_to_free_amount: number; // 0 - 300K COP
    shipping_missing_to_free_percentage: number; // 0 - 100%
}

export type ICartShipping = {
    address: string;
    city: string;
    country: string;
    department: string;
    email: string;
    firstname: string;
    lastname: string;
    phone: string;
}

export type ICartUser = {
    id: number;
    email: string;
    nid_number: string;
    nid_type: string;
    points: number;
    name: string;
    first_name: string;
    last_name: string;
    address: string;
}

export const DefaultCart:ICart = {

    status: ISideCartStatus.CLOSE,

    user: {
        id: 0,
        points: 0,

        email: '',
        nid_number:'',
        nid_type: '',

        name: '',
        first_name: '',
        last_name: '',
        address: '',
    },
    shipping: {
        address: '',
        city: '',
        country: '',
        department: '',
        email: '',
        firstname: '',
        lastname: '',
        phone:  '',
    },
    products: [],
    overview: {

        total_points:0,
        total_price: 0,
        shipping_price: 0,
        taxes_price: 0,
        subtotal_price: 0,

        shipping_status: ICartShippingStatus.PENDING,
        shipping_missing_to_free_amount: FREE_SHIPPING_AMOUNT,
        shipping_missing_to_free_percentage: 0
    },


}
