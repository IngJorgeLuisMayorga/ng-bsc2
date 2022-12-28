import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input-quantity',
  templateUrl: './input-quantity.component.html',
  styleUrls: ['./input-quantity.component.scss']
})
export class InputQuantityComponent {

    @Input()
    count!: number;

    @Output()
    up = new EventEmitter();

    @Output()
    down = new EventEmitter();

    @Output()
    delete = new EventEmitter();

}
