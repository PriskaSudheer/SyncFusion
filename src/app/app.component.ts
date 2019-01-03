import { Component} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { MatIconRegistry } from '@angular/material'
import { ObservableMedia } from '@angular/flex-layout'
import { ItemModel} from '@syncfusion/ej2-angular-splitbuttons';


@Component({
  selector: 'app-root',
 
  styles: [
    `.app-container {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
   
  },
 `,
],
  template: `
  <div class="app-container">
    <mat-toolbar color="primary" fxLayoutGap="20px" class="app-toolbar">
      <button mat-icon-button><mat-icon>menu</mat-icon></button>
      <a mat-icon-button routerLink="/home"><h1>Lemon-mart</h1></a>
     <mat-icon  style="font-size: 16px !important" svgIcon="lemon"></mat-icon>
      <span class="flex-spacer"></span>

      <button ejs-dropdownbutton [items]='items' content=" User Profile" 
      iconCss="e-ddb-icons e-profile" routerLink="/user/profileuser"></button>
   
      <button ejs-dropdownbutton [items]='itemss' content=" logout" 
      iconCss="e-ddb-icons e-profile" routerLink="/user/logout" >
      <mat-icon>lock_open</mat-icon></button>

    </mat-toolbar>
    <router-outlet></router-outlet>
  </div>
`,
})
export class AppComponent {
  title = 'lemon-mart-sync';
  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    public media: ObservableMedia
  ) {
    iconRegistry.addSvgIcon(
      'lemon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/lemon.svg')
    )
  }
  public items: ItemModel[] = [
    {
        text: 'Dashboard',
        iconCss: 'e-ddb-icons e-dashboard'
    },
    {
        text: 'Notifications',
        iconCss: 'e-ddb-icons e-notifications',
    },
    {
        text: 'User Settings',
        iconCss: 'e-ddb-icons e-settings',
    }];
    public itemss: ItemModel[] = [

      {
          text: 'User Settings',
          iconCss: 'e-ddb-icons e-settings',
      },
      {
          text: 'Log Out',
          iconCss: 'e-ddb-icons e-logout'
      }];
   
}

