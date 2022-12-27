import { Component } from '@angular/core';
import footerConfig, { IColor } from '../../config/footer.config';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public title = footerConfig.title;
  public menus = footerConfig.menus;

  public year = new Date().getFullYear();

  public getHoverClass(color: IColor): string{
    return `hover-color-${color}`;
  }

}
