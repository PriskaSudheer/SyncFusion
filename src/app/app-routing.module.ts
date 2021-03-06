import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'
import { ManagerHomeComponent } from './manager/manager-home/manager-home.component'
import { ManagerModule } from './manager/manager.module';
import { UserModule } from './user/user.module';
import { PosModule } from './pos/pos.module';
import { InventoryModule } from './inventory/inventory.module';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'manager', loadChildren:()=>ManagerModule},
  { path: 'user', loadChildren:()=>UserModule }, 
  { path: 'pos', loadChildren:()=>PosModule },
  { path: 'inventory', loadChildren:()=>InventoryModule },
  { path: '**', component: PagenotfoundComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
