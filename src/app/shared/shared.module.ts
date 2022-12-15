import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { HeaderAdsComponent } from './components/header-ads/header-ads.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutBasicComponent } from './layout/layout-basic/layout-basic.component';
import { LayoutSidebarComponent } from './layout/layout-sidebar/layout-sidebar.component';
import { HeaderNavbarComponent } from './components/header-navbar/header-navbar.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarCartComponent } from './components/sidebar-cart/sidebar-cart.component';
import { ImgHoverComponent } from './components/img-hover/img-hover.component';


const COMPONENTS = [
  NotFoundComponent,
  HeaderAdsComponent,
  HeaderAdminComponent,
  HeaderComponent,
  LayoutBasicComponent,
  LayoutSidebarComponent,
  HeaderNavbarComponent,
  BreadcrumbsComponent,
  FooterComponent,
  SidebarCartComponent,
  ImgHoverComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule
  ],
})
export class SharedModule { }
