export interface IProduct {
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

  categories: {
    skin: ICategory;
    main_ingredient: ICategory;
    solution: ICategory;
    step: ICategory;
    extra: ICategory;
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
