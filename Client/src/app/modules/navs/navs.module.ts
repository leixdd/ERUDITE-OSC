import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashNavComponent } from '../usm/layouts/dash-nav/dash-nav.component';
import { DashSideNavComponent } from '../usm/layouts/dash-side-nav/dash-side-nav.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ProjectNavComponent } from './components/project-nav/project-nav.component';
import { ProjectSideNavComponent } from './components/project-side-nav/project-side-nav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [DashNavComponent, DashSideNavComponent, ProjectNavComponent, ProjectSideNavComponent],
  exports: [DashNavComponent, DashSideNavComponent, CommonModule, RouterModule,  ProjectSideNavComponent, ProjectNavComponent]
})
export class NavsModule { }
