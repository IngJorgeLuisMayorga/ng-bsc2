import { IProduct } from "./Product.model";

export interface IProductHttp {

  id: number;
  updated_at: Date;
  created_at: Date;

  sku: number;
  name: string;
  visible: boolean;

  brand: string;
  description: string;
  ingredients: string;

  image1_src: URL;
  image2_src: URL;
  image3_src: URL;
  image4_src: URL;

  price: number;
  discount: number;
  stock: number;

  category_skin: any;
  category_main_ingredient: any;
  category_solution: any;
  category_step: any;
  category_extra: any;

  duo_isDuo: boolean;
  duo_productA: IProductHttp | null;
  duo_productB: IProductHttp | null;
}

export function mapProductFrom(product: IProduct): IProductHttp{
  return {} as IProductHttp
}

export function mapProductTo(product: IProductHttp): IProduct{
  return {} as IProduct
}

