import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderAdminComponent } from '../../components/header-admin/header-admin.component';
import { HeaderAdsComponent } from '../../components/header-ads/header-ads.component';
import { HeaderNavbarComponent } from '../../components/header-navbar/header-navbar.component';
import { SidebarCartComponent } from '../../components/sidebar-cart/sidebar-cart.component';
import { SharedModule } from '../../shared.module';

import { LayoutBasicComponent } from './layout-basic.component';

describe('LayoutBasicComponent', () => {
  let component: LayoutBasicComponent;
  let fixture: ComponentFixture<LayoutBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutBasicComponent, HeaderAdsComponent, HeaderNavbarComponent, HeaderAdminComponent, SidebarCartComponent, BreadcrumbsComponent, FooterComponent],
      imports: [SharedModule, RouterModule, HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
