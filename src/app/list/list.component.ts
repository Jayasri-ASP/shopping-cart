import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';

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
}
