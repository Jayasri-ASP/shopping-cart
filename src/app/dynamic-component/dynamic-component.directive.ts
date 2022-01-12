import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamicComp]',
})
export class DynamicComponentDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}