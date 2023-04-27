import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { ToolsComponent } from './pages/tools/tools.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ToolListComponent } from './components/tool-list/tool-list.component';
import { ToolItemComponent } from './microcomponents/tool-item/tool-item.component';
import { UserInputComponent } from './microcomponents/user-input/user-input.component';
import { ErrorBannerComponent } from './microcomponents/error-banner/error-banner.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserContextService } from './services/context/user-context.service';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './microcomponents/menu-item/menu-item.component';
import { UsersComponent } from './pages/users/users.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ToolFilterComponent } from './components/tool-filter/tool-filter.component';
import {CurvedElementComponent} from "./microcomponents/tool-element/curved-element.component";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { MenuButtonComponent } from './microcomponents/menu-button/menu-button.component';
import { UserItemComponent } from './microcomponents/user-item/user-item.component';
import { MicroLoadingComponent } from './microcomponents/micro-loading/micro-loading.component';
import { PaginationIndicatorComponent } from './microcomponents/pagination-indicator/pagination-indicator.component';
import { SearchBarComponent } from './microcomponents/search-bar/search-bar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

/**
 * Módulo de la aplicación Angular que declara los componentes, servicios y otros módulos utilizados en la aplicación
 */
@NgModule({
  declarations: [
    AppComponent, // Componente principal de la aplicación
    HomeComponent, // Componente de la página de inicio
    ToolsComponent, // Componente de la página de herramientas
    LoginComponent, // Componente de la página de inicio de sesión
    SignupComponent,  // Componente de la página de registro
    SignInComponent,  // Componente de la página de registro
    ToolListComponent,  // Componente de la lista de herramientas
    ToolItemComponent,  // Componente de la lista de herramientas
    UserInputComponent, // Componente de la lista de herramientas
    ErrorBannerComponent, // Componente del banner de error
    LayoutComponent,  // Componente del layout de la aplicación
    HeaderComponent,  // Componente del header de la aplicación
    FooterComponent,  // Componente del footer de la aplicación
    MenuComponent,  // Componente del menú de la aplicación
    MenuItemComponent,  // Componente del menú de la aplicación
    UsersComponent, // Componente de la página de usuarios
    NotFoundComponent,  // Componente de la página de error 404
    SignUpComponent,   // Componente de la página de registro
    ToolFilterComponent,  // Componente del filtro de herramientas
    CurvedElementComponent, // Componente del filtro de herramientas
    CurvedElementComponent, 
    DashboardComponent, 
    UserListComponent, 
    MenuButtonComponent, 
    UserItemComponent, 
    MicroLoadingComponent,
    SearchBarComponent,
    PaginationIndicatorComponent
    
  ],
  /**
   * Módulos importados por el módulo de la aplicación
   */
  imports: [
    BrowserModule,  // Módulo de la aplicación
    BrowserAnimationsModule,  // Módulo de animaciones de la aplicación
    AppRoutingModule, // Módulo de rutas de la aplicación
    FormsModule,  // Módulo de formularios de la aplicación
    ReactiveFormsModule,  // Módulo de formularios reactivos de la aplicación
    GraphQLModule,  // Módulo de GraphQL de la aplicación
    HttpClientModule,  // Módulo de HTTP de la aplicación
    MatIconModule,  // Módulo de iconos de la aplicación
    MatCheckboxModule,  // Módulo de checkbox de la aplicación
    MatMenuModule,  // Módulo de menú de la aplicación
    MatButtonModule,  // Módulo de botones de la aplicación
  ],
  providers: [UserContextService],  // Servicios de la aplicación
  bootstrap: [AppComponent] // Componente principal de la aplicación
})
export class AppModule {

 }