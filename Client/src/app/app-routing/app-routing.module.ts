import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PublicComponent } from './../layouts/public/public.component';
import { PUBLIC_ROUTES } from './../layouts/public/public.routes';

import { SecureComponent } from './../layouts/secure/secure.component';
import { SECURE_ROUTES } from './../layouts/secure/secure.routes';

import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

const APP_ROUTES : Routes = [
  {path: '', component: PublicComponent, children: PUBLIC_ROUTES},
  {path: '', component: SecureComponent, children: SECURE_ROUTES, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard],
  declarations: [PublicComponent, SecureComponent]
})
export class AppRoutingModule { }
