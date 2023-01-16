import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProductHttp, mapProductTo } from '../models/IProduct.http';
import { IProduct } from '../models/Product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsRepositoryService {

  constructor(private $http: HttpClient) { }

  public getById(productId: number): Promise<IProduct>{
    return firstValueFrom(
      this.$http.get<IProductHttp>(`${environment.api}/products/${productId}`).pipe(
        map((product: IProductHttp) => mapProductTo(product))
      )
    );
  }

  
}
