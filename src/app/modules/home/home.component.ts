import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from '@shared/services/breadcrumbs.service';
import { IBreadcrumb } from 'src/app/shared/models/Breadcrumbs.model';
import { AuthService } from '../auth/services/auth.service';
import { IProduct } from '../products/models/Product.model';
import { ProductsRepositoryService } from '../products/services/products-repository.service';
import { ProductsStoreService } from '../products/services/products-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public isHero = false;
  public breadcrumbs: IBreadcrumb[] = [];

  public product: IProduct | null = null;

  constructor(
    private $breadcrumbs: BreadcrumbsService, 
    private $productsStore: ProductsStoreService
  ) {}

  async ngOnInit() {
    this.breadcrumbs = this.$breadcrumbs.getNone();
    //this.$auth.mockLogin('RoleAdmin');

    // Mock Product Id 1
    this.product = await this.$productsStore.fetchById(6);

  }
}
