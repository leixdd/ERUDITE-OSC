import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';



import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './layouts/login-form/login-form.component';
import { RegistrationFormComponent } from './layouts/registration-form/registration-form.component';
import { NavigationComponent } from './../../layouts/navigation/navigation.component';
import { UsmService } from './usm.service';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashLayoutComponent } from './layouts/dash-layout/dash-layout.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { NavsModule } from '../navs/navs.module';
import { DashLeftNavComponent } from './layouts/dash-left-nav/dash-left-nav.component';
import { TestfrmComponent } from './testfrm/testfrm.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpModule,
    NavsModule
  ],
  declarations: [HomeComponent, RegistrationComponent, LoginComponent, LoginFormComponent, RegistrationFormComponent, NavigationComponent, ProfileComponent, DashboardComponent, DashLayoutComponent, AccountSettingsComponent, DashLeftNavComponent, TestfrmComponent, LogoutComponent],
  providers: [UsmService]
})
export class UsmModule { }
