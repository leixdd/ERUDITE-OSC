import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http/';
import { CommonModule } from '@angular/common';
import { ProjectinitComponent } from './components/projectinit/projectinit.component';
import { NavsModule } from '../navs/navs.module';
import { PrjmService } from './prjm.service';
import { ProjectdashComponent } from './components/projectdash/projectdash.component';
import { ProjectMileComponent } from './components/project-mile/project-mile.component';
import { ProjectAnalyticsComponent } from './components/project-analytics/project-analytics.component';
import { MilestoneComponent } from './components/milestone/milestone.component';
import { ProjectTeamComponent } from './components/project-team/project-team.component';
import { ProjectScheduleComponent } from './components/project-schedule/project-schedule.component';
import { FullCalendarModule } from 'ng-fullcalendar';

@NgModule({
  imports: [
    CommonModule,
    NavsModule,
    FormsModule,
    HttpModule,
    FullCalendarModule
  ],
  declarations: [ProjectinitComponent, ProjectdashComponent, ProjectMileComponent, ProjectAnalyticsComponent, MilestoneComponent, ProjectTeamComponent, ProjectScheduleComponent],
  providers: [PrjmService]
})
export class PrjmModule { }
