import { trigger } from '@angular/animations';
import { Injectable } from '@angular/core';
import { IBreadcrumb } from '@shared/models/Breadcrumbs.model';
import { IProduct } from 'src/app/modules/products/models/Product.model';

const MOCK_BREADCRUMBS = [
  {
    path: '/',
    active: false,
    text: 'Inicio',
  },
  {
    path: '/rutines/corean',
    active: false,
    text: 'Rutina Coreana',
  },
  {
    path: '/product/types/serum',
    active: false,
    text: 'Sreum',
  },
  {
    path: '/product/id/23',
    active: true,
    text: 'Green Tea Aqua Soothing Gel Cream COSRx',
  },
];

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {

  constructor() { }

  getNone():IBreadcrumb[]{
    return [];
  }

  getByProduct(product: IProduct):IBreadcrumb[]{
    const breadcrumb = [
      { path: '/', text: 'Inicio', active: false },
      product.breadcrumbs.rutine,
      product.breadcrumbs.category,
      product.breadcrumbs.product
    ];
    return breadcrumb;
  }

  getMock(){
    return MOCK_BREADCRUMBS;
  }
}
