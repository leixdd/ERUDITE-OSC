import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AdminDashboardComponent } from './component/dashboard/dashboard.component';
import { AdminService } from './admin.service';
import { NavsModule } from '../navs/navs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpModule,
    NavsModule
  ],
  providers: [AdminService],
  declarations: [AdminDashboardComponent]
})
export class AdminModule { }
