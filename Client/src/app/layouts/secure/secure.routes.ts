

//Modules
import {RouterModule, Routes} from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';

//Components
import { AdminDashboardComponent } from '../../modules/admin/component/dashboard/dashboard.component';
import { ProfileComponent } from '../../modules/usm/components/profile/profile.component';
import { AccountSettingsComponent } from '../../modules/usm/components/account-settings/account-settings.component';
import { ChatComponent } from '../../modules/rc/components/chat/chat.component';
import { ProjectinitComponent } from '../../modules/prjm/components/projectinit/projectinit.component';
import { ProjectdashComponent } from '../../modules/prjm/components/projectdash/projectdash.component';
import { ProjectMileComponent } from '../../modules/prjm/components/project-mile/project-mile.component';
import { ProjectAnalyticsComponent } from '../../modules/prjm/components/project-analytics/project-analytics.component';
import { MilestoneComponent } from '../../modules/prjm/components/milestone/milestone.component';
import { ProjectTeamComponent } from '../../modules/prjm/components/project-team/project-team.component';
import { LogoutComponent } from '../../modules/usm/logout/logout.component';
import { ProjectScheduleComponent } from '../../modules/prjm/components/project-schedule/project-schedule.component';
import { DashboardComponent } from '../../modules/usm/components/dashboard/dashboard.component';


export const SECURE_ROUTES : Routes = [

    //User routes
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    {path: 'settings', component: AccountSettingsComponent, canActivate: [AuthGuard]},
    {path: 'logout', component: LogoutComponent, canActivate: [AuthGuard]},
    
    //Real Time Message Routes
    {path: 'chat', component: ChatComponent, canActivate: [AuthGuard]},

    //Projects
    {path: 'projects', component: ProjectdashComponent, canActivate: [AuthGuard]},
    {path: 'project/init', component: ProjectinitComponent, canActivate: [AuthGuard]},
    {path: 'project/:prjm_id', component: ProjectAnalyticsComponent, canActivate: [AuthGuard]},
    {path: 'project/milestones/:prjm_id', component: MilestoneComponent, canActivate: [AuthGuard]},
    {path: 'project/milestone/:prjm_id/:mile_id', component: ProjectMileComponent, canActivate: [AuthGuard]},
    {path: 'project/team/:prjm_id', component: ProjectTeamComponent, canActivate: [AuthGuard]},
    {path: 'project/schedules/:prjm_id', component: ProjectScheduleComponent, canActivate: [AuthGuard]},
    

    //Administrative
    {path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard]}
];
