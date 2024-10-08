import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  navigateTo(city: string) {
    this.router.navigate(['/city',city]);
  }


}
