import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { IRole } from '../auth/models/auth.model';
import { ProductsComponent } from './products.component';
import { ViewProductsAdminAddIdComponent } from './views/view-products-admin-add-id/view-products-admin-add-id.component';
import { ViewProductsAdminAllComponent } from './views/view-products-admin-all/view-products-admin-all.component';
import { ViewProductsAdminEditIdComponent } from './views/view-products-admin-edit-id/view-products-admin-edit-id.component';
import { ViewProductsAdminStatsComponent } from './views/view-products-admin-stats/view-products-admin-stats.component';
import { ViewProductsAllComponent } from './views/view-products-all/view-products-all.component';
import { ViewProductsCategoryIdComponent } from './views/view-products-category-id/view-products-category-id.component';
import { ViewProductsIdComponent } from './views/view-products-id/view-products-id.component';

const routes: Routes = [
  {
    path:'products',
    component: ProductsComponent,
    children: [

      //FrontOffice View
      {
        path:'', component: ViewProductsAllComponent
      },
      {
        path:'id/:id', component: ViewProductsIdComponent
      },
      {
        path:'category/:id', component: ViewProductsCategoryIdComponent
      },

      //BackOffice Admin
      {
        path:'admin/all', component: ViewProductsAdminAllComponent,
        canActivate: [AuthGuard],
        data: {
          role: 'RoleAdmin' as IRole
        }
      },
      {
        path:'admin/stats', component: ViewProductsAdminStatsComponent,
        canActivate: [AuthGuard],
        data: {
          role: 'RoleAdmin' as IRole
        }
      },
      {
        path:'admin/add/:id', component: ViewProductsAdminAddIdComponent,
        canActivate: [AuthGuard],
        data: {
          role: 'RoleAdmin' as IRole
        }
      },
      {
        path:'admin/edit/:id', component: ViewProductsAdminEditIdComponent,
        canActivate: [AuthGuard],
        data: {
          role: 'RoleAdmin' as IRole
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
