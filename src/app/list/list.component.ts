import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
  }

  OnCancel() {
    this.router.navigateByUrl("/");
  }
  // Create an Observable that will publish a value on an interval
 secondsCounter = interval(1000);
// Subscribe to begin publishing values
 subscription = this.secondsCounter.subscribe(n =>
  console.log(`It's been ${n + 1} seconds since subscribing!`));
}
