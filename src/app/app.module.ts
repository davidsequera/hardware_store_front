import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ToolsComponent } from './pages/tools/tools.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
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
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AccountButtonComponent } from './microcomponents/account-button/account-button.component';
import { SignInButtonComponent } from './microcomponents/sign-in-button/sign-in-button.component';
import { ToolFilterComponent } from './components/tool-filter/tool-filter.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolsComponent,
    LoginComponent,
    SignupComponent,
    SignInComponent,
    ToolListComponent,
    ToolItemComponent,
    UserInputComponent,
    ErrorBannerComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MenuItemComponent,
    UsersComponent,
    NotFoundComponent,
    SignUpComponent,
    AccountButtonComponent,
    SignInButtonComponent,
    ToolFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GraphQLModule,
    MatIconModule,
    MatCheckboxModule,
    HttpClientModule
  ],
  providers: [UserContextService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
