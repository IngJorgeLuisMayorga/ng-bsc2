import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from '@shared/services/breadcrumbs.service';
import { IBreadcrumb } from 'src/app/shared/models/Breadcrumbs.model';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public breadcrumbs: IBreadcrumb[] = [];

  constructor(private $breadcrumbs: BreadcrumbsService) {}

  ngOnInit(): void {
    this.breadcrumbs = this.$breadcrumbs.getNone();
    //this.$auth.mockLogin('RoleAdmin');
  }
}
