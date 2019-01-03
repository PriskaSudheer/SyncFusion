import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  template: `
  <mat-toolbar color="accent" fxLayoutGap="8px">
  <button ejs-button cssClass="e-primary" routerLink="/inventory/home" routerLinkActive="active-link">Inventory Dashboard</button>
  <button ejs-button cssClass="e-primary" routerLink="/inventory/stockEntry" routerLinkActive="active-link">Stock Entry</button>
  <button ejs-button cssClass="e-primary" routerLink="/inventory/products" routerLinkActive="active-link">Products</button>
  <button ejs-button cssClass="e-primary" routerLink="/inventory/categories"  routerLinkActive="active-link">catagories</button>

  </mat-toolbar>
  <router-outlet></router-outlet>
`,
styles: [
  `.active-link {
    font-weight: bold;
    border-bottom: 2px solid #005005;
  }`,
],
})
export class InventoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
