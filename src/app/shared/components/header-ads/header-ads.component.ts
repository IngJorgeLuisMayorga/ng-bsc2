import { Component } from '@angular/core';

@Component({
  selector: 'app-header-ads',
  templateUrl: './header-ads.component.html',
  styleUrls: ['./header-ads.component.scss']
})
export class HeaderAdsComponent {

  public caption = '';
  public normal = '../../../../assets/icons/header-ads/caritaporcentaje_BSC.png';
  public hover = '../../../../assets/icons/header-ads/caritaporcentaje_BSC_hover.png';
}
