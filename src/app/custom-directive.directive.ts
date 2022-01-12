import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {
  constructor(private el: ElementRef) { 
    el.nativeElement.style.color= " green"
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('blue');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
