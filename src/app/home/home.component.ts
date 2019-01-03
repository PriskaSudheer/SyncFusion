import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="app-container">
    <div fxLayout="column" fxLayoutAlign="center center">
      <span class="mat-display-2">Hello, Lemonite!</span>
      
      <button ejs-button cssClass="e-success" routerLink="/inventory">
      Login as inventory</button>
      <button ejs-button cssClass="e-success" routerLink="/manager">Login as Manager</button>
    </div>
  </div>
`,
  styles: [`

  `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
