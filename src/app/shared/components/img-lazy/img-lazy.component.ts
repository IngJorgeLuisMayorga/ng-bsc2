import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-lazy',
  templateUrl: './img-lazy.component.html',
  styleUrls: ['./img-lazy.component.scss']
})
export class ImgLazyComponent implements OnInit{

  @Input()
  src = '';

  @Input()
  thumb = '';

  public isLoaded = false;

  ngOnInit(){
  }

  onLoad(){
    this.isLoaded = true;
  }
}
