import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-manager',
  styles: [
    `.active-link {
      font-weight: bold;
      border-bottom: 2px solid #005005;
    }`,
  ],
  template: `
      <mat-toolbar color="accent" fxLayoutGap="8px"> 
      <button ejs-button cssClass="e-primary" routerLink="/manager/home" routerLinkActive="active-link">Manager's Dashboard</button>      
      <button ejs-button cssClass="e-primary" routerLink="/manager/users" routerLinkActive="active-link">User Management</button>
      <button ejs-button cssClass="e-primary" routerLink="/manager/receipts" routerLinkActive="active-link">Receipt Lookup</button>
      
   
      </mat-toolbar>  
      <router-outlet></router-outlet> 
 ` ,

})
export class ManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
