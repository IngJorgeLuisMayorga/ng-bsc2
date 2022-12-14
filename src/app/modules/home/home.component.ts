import { Component, OnInit } from '@angular/core';
import { IBreadcrumbs } from 'src/app/shared/models/Breadcrumbs.model';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  public breadcrumbs: IBreadcrumbs[] = [
    {
      path: '/',
      text: 'Home'
    }
  ];

  constructor(){}

  ngOnInit(): void {
    //this.$auth.mockLogin('RoleAdmin');
  }

}
