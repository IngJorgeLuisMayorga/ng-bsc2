import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersStoreService } from 'src/app/modules/orders/services/orders-store.service';
import { UsersStoreService } from '../../services/users-store.service';

@Component({
  selector: 'app-view-users-id-orders-id',
  templateUrl: './view-users-id-orders-id.component.html',
  styleUrls: ['./view-users-id-orders-id.component.scss']
})
export class ViewUsersIdOrdersIdComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private $users: UsersStoreService,
    private $orders: OrdersStoreService
  ){}

  public isLoading = true;

  async ngOnInit() {
    /*
      const userId = this.route.snapshot.params('user').;
      const orderId = this.route.getById('user');

      const user = await this.$users.getById(userId);
      const orders = await this.$users.getById(orderId);

      this.name = user.first_name + ' ' + user.last_name;
      this.orders = orders;

      this.isLoading = false;
      */
  }
}
