import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img-hover',
  templateUrl: './img-hover.component.html',
  styleUrls: ['./img-hover.component.scss']
})
export class ImgHoverComponent {

    @Input()
    normal!: string;

    @Input()
    hover!: string;

    @Input()
    caption!: string;

}
