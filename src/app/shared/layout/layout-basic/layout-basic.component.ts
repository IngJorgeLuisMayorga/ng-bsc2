import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-basic',
  templateUrl: './layout-basic.component.html',
  styleUrls: ['./layout-basic.component.scss']
})
export class LayoutBasicComponent {

  @Input()
  breadcrumbs: any[] = [];


  @Input()
  title: string = '';

  constructor(){

  }

}
