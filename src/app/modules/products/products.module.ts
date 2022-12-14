import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products.routing';
import { ProductsComponent } from './products.component';
import { ViewProductsAllComponent } from './views/view-products-all/view-products-all.component';
import { ViewProductsIdComponent } from './views/view-products-id/view-products-id.component';
import { ViewProductsAdminAllComponent } from './views/view-products-admin-all/view-products-admin-all.component';
import { ViewProductsAdminAddIdComponent } from './views/view-products-admin-add-id/view-products-admin-add-id.component';
import { ViewProductsAdminEditIdComponent } from './views/view-products-admin-edit-id/view-products-admin-edit-id.component';
import { ViewProductsCategoryIdComponent } from './views/view-products-category-id/view-products-category-id.component';
import { ViewProductsAdminStatsComponent } from './views/view-products-admin-stats/view-products-admin-stats.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ProductsComponent,
    ViewProductsAllComponent,
    ViewProductsIdComponent,
    ViewProductsAdminAllComponent,
    ViewProductsAdminAddIdComponent,
    ViewProductsAdminEditIdComponent,
    ViewProductsCategoryIdComponent,
    ViewProductsAdminStatsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
