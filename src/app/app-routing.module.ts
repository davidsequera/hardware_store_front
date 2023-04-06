import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ToolsComponent } from './pages/tools/tools.component';
import { UsersComponent } from './pages/users/users.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';


const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: 'tools', component: ToolsComponent },
  { path: 'users', component: UsersComponent },
  { path: '', component: LoginComponent },
  { path: 'singup', component: SignupComponent },
  { path: '**', component: ToolsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
