import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHightLight]'
})
export class HightLightDirective implements AfterViewInit {

  constructor(private _elementRef:ElementRef<HTMLElement>) { }
  ngAfterViewInit(): void {
    this._elementRef.nativeElement.addEventListener('mouseenter',this.onMouseEnter.bind(this))
    this._elementRef.nativeElement.addEventListener('mouseleave', this.onMouseLeave.bind(this))
  }
  public onMouseEnter(){
    this._elementRef.nativeElement.style.color = 'red';
  }
  public onMouseLeave(){
    this._elementRef.nativeElement.style.color = 'inherit'
  }
}
