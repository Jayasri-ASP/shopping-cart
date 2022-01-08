import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-default-item',
  templateUrl: './default-item.component.html',
  styleUrls: ['./default-item.component.css']
})
export class DefaultItemComponent implements OnInit {
  products: string = ''
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.products = params['product'];
      }
    )
  }

}
