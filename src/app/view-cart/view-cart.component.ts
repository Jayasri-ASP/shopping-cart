import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
  @Input() productLength = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
