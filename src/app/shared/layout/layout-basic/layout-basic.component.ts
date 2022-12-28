import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IBreadcrumb } from '@shared/models/Breadcrumbs.model';

@Component({
  selector: 'app-layout-basic',
  templateUrl: './layout-basic.component.html',
  styleUrls: ['./layout-basic.component.scss']
})
export class LayoutBasicComponent {

  @Input()
  breadcrumbs: IBreadcrumb[] = [];

  @Input()
  title: string = '';

  constructor(){

  }

}
