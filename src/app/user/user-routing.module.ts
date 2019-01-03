import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LogoutComponent } from './logout/logout.component'
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  { path: 'profileuser', component: ProfileComponent },
  { path: 'logout', component: LogoutComponent }, 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}