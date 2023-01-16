import { ImageURL } from "@shared/models/ImageURL.model";
import { IProduct } from "./Product.model";

export interface IProductHttp {

  id: number;
  updated_at: string;
  created_at: string;

  sku: number;
  name: string;
  visible: number;

  brand: string;
  description: string;
  ingredients: string;

  image1_src: string;
  image2_src: string;
  image3_src: string;
  image4_src: string;

  price: number;
  discount: number;
  stock: number;

  category_skin: any;
  category_main_ingredient: any;
  category_solution: any;
  category_step: any;
  category_extra: any;

  isDuo: number;
  productA_id: number;
  productB_id: number;
}

export function mapProductFrom(product: IProduct): IProductHttp{
  return {} as IProductHttp
}

export function mapProductTo(product: IProductHttp): IProduct{
  return {
    id: product.id,
    updated_at: new Date(product.updated_at),
    created_at: new Date(product.created_at),

    sku: String(product.sku),
    title: String(product.name),
    visible: Boolean(product.visible === 1),

    brand: String(product.brand) || '',
    description: String(product.description) || '',
    ingredients: String(product.ingredients) || '',

    image1_src: new ImageURL(product.image1_src).getURL(),
    image2_src: new ImageURL(product.image2_src).getURL() ,
    image3_src: new ImageURL(product.image3_src).getURL() ,
    image4_src: new ImageURL(product.image4_src).getURL() ,
  
    price: Number(product.price),
    discount: Number(product.discount),
    stock: Number(product.stock),
    quantity: Number(0),

    duo_isDuo: Boolean(product.isDuo === 1),
    duo_productA: Number(product.productA_id),
    duo_productB: Number(product.productB_id),

  categories: {
    skin: product.category_skin,
    main_ingredient: product.category_main_ingredient,
    solution: product.category_solution,
    step: product.category_step,
    extra: product.category_extra,
  },

  breadcrumbs:{
    rutine: {
      active: false,
      path: '/rutine/',
      text: 'Rutina',
    },
    category: {
      active: false,
      path: '/category',
      text: 'Category',
    },
    product: {
      active: false,
      path: `/product/${toSlug(product.name)}`,
      text: product.name,
    }
  }

  } as IProduct
}


function toSlug(name: string): string{
  return name
  .toString()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .trim()
  .replace(/\s+/g, '-')
  .replace(/[^\w-]+/g, '')
  .replace(/--+/g, '-')
}
