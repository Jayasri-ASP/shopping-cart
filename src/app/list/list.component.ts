import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { ServiceFileService } from '../service-file.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title: string = ''
  @Input() username = '';
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }
  ngOnInit(): void {
   
}

  OnCancel() {
    this.router.navigateByUrl("/");
  }
  // Create an Observable that will publish a value on an interval
// secondsCounter = interval(1000);
// Subscribe to begin publishing values
// subscription = this.secondsCounter.subscribe(n =>
 // console.log(`It's been ${n + 1} seconds since subscribing!`));
}
