import { IBreadcrumb } from "@shared/models/Breadcrumbs.model";

export interface IProduct {
  id: number;
  updated_at: Date;
  created_at: Date;

  sku: string;
  title: string;
  visible: boolean;

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
  quantity: number;

  categories: {
    skin: ICategory;
    main_ingredient: ICategory;
    solution: ICategory;
    step: ICategory;
    extra: ICategory;
  }

  breadcrumbs:{
    rutine: IBreadcrumb,
    category: IBreadcrumb,
    product: IBreadcrumb
  }
}

export interface IProductDuo extends IProduct {
  isDuo: boolean;
  duo_productA: IProduct;
  duo_productB: IProduct;
}

export interface ICategory {
  title: string
  type: 'skin' | 'main_ingredient' | 'solution' | 'step' | 'brand' | 'extra';
  src_normal: URL;
  src_hover: URL;
}
