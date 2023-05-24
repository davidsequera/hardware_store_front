import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ToolsComponent } from './pages/tools/tools.component';
import { UsersComponent } from './pages/users/users.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // ruta raíz, redirige a HomeComponent
  { path: 'tools', component: ToolsComponent }, // ruta a la página de herramientas
  { path: 'users', component: UsersComponent }, // ruta a la página de usuarios
  { path: 'login', component: LoginComponent }, // ruta a la página de inicio de sesión
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: NotFoundComponent }, // ruta para cualquier otra URL no reconocida
];

/**
 * Módulo de enrutamiento para la aplicación Angular
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)], // importa el módulo de rutas de Angular y registra las rutas definidas
  exports: [RouterModule] // exporta el módulo de rutas para que pueda ser utilizado en otros módulos
})
export class AppRoutingModule { }
