import { Component, OnInit, OnChanges, SimpleChanges, AfterContentChecked, AfterContentInit, AfterViewInit, OnDestroy, AfterViewChecked } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnChanges, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() productdetails = ''
  @Output() newItemEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    console.log("Oninit");
  }
  ngOnChanges(changes: SimpleChanges) {
      console.log("OnChanges", changes);
      for (const propName in changes) {
        const chng = changes[propName];
        const cur  = JSON.stringify(chng.currentValue);
        const prev = JSON.stringify(chng.previousValue);
        console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
      }  
  }
  ngDoCheck() {
    console.log("DoCheck");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
      console.log("ngAfterContentChecked");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
      console.log("ngAfterViewChecked");
  }
  ngOnDestroy() {
    console.log("OnDestroy");
  }

  addNewItem(val: string) {
    this.newItemEvent.emit(val);
  }
}
