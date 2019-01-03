import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
} from '@angular/material'
import { HttpClientModule } from '@angular/common/http'
import { FlexLayoutModule } from '@angular/flex-layout';
import { ManagerModule } from './manager/manager.module';
import { InventoryModule } from './inventory/inventory.module';
import { PosModule } from './pos/pos.module';
import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    ManagerModule,
    InventoryModule,
    PosModule,
    UserModule,
    HttpClientModule,
    DropDownButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
