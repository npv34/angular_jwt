import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AdminComponent} from "./admin/admin.component";
import {AuthGuardGuard} from "./auth-guard.guard";


const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
