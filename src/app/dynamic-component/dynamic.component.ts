import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Input, ViewChild } from '@angular/core';
import { DynamicComponentDirective } from './dynamic-component.directive';
import  { AdComponent } from './ad.component'
@Component({
    selector: 'app-dynamic',
    template: `
  <div class="ad-banner-example">
    <h3>Advertisements</h3>
    <ng-template adHost></ng-template>
  </div>
`
})
export class DynamicComponent implements AfterViewInit, OnDestroy {
    ads = Array();
  
    currentAdIndex = -1;
  
    @ViewChild(DynamicComponentDirective, {static: true}) adHost!: DynamicComponentDirective;
    interval: number | any;
  
    ngAfterViewInit() {
      this.loadComponent();
      this.getAds();
    }
  
    ngOnDestroy() {
      clearInterval(this.interval);
    }
  
    loadComponent() {
      this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
      const adItem = this.ads[this.currentAdIndex];
  
      const viewContainerRef = this.adHost.viewContainerRef;
      viewContainerRef.clear();
  
      const componentRef = viewContainerRef.createComponent<AdComponent>(adItem.component);
      componentRef.instance.data = adItem.data;
    }
  
    getAds() {
      this.interval = setInterval(() => {
        this.loadComponent();
      }, 3000);
    }
  }