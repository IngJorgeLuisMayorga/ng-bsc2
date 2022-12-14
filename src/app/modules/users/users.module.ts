import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewUsersAdminAddIdComponent } from './views/view-users-admin-add-id/view-users-admin-add-id.component';
import { ViewUsersAdminAllComponent } from './views/view-users-admin-all/view-users-admin-all.component';
import { ViewUsersAdminEditIdComponent } from './views/view-users-admin-edit-id/view-users-admin-edit-id.component';
import { ViewUsersAdminStatsComponent } from './views/view-users-admin-stats/view-users-admin-stats.component';
import { ViewUsersIdAccountComponent } from './views/view-users-id-account/view-users-id-account.component';
import { ViewUsersIdOrdersComponent } from './views/view-users-id-orders/view-users-id-orders.component';
import { ViewUsersIdFavsComponent } from './views/view-users-id-favs/view-users-id-favs.component';
import { ViewUsersIdEditComponent } from './views/view-users-id-edit/view-users-id-edit.component';
import { ViewUsersIdOrdersIdComponent } from './views/view-users-id-orders-id/view-users-id-orders-id.component';



@NgModule({
  declarations: [
    ViewUsersAdminAddIdComponent,
    ViewUsersAdminAllComponent,
    ViewUsersAdminEditIdComponent,
    ViewUsersAdminStatsComponent,
    ViewUsersIdAccountComponent,
    ViewUsersIdOrdersComponent,
    ViewUsersIdFavsComponent,
    ViewUsersIdEditComponent,
    ViewUsersIdOrdersIdComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
