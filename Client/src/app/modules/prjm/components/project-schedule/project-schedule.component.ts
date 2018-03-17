import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { Subscription } from 'rxjs/Subscription';
import { PrjmService } from '../../prjm.service';

declare var $:any;

@Component({
  selector: 'app-project-schedule',
  templateUrl: './project-schedule.component.html',
  styleUrls: ['./project-schedule.component.css']
})
export class ProjectScheduleComponent implements OnInit, AfterViewInit, OnDestroy {


  Subs1 : Subscription;
  Keys : any;
  Query : any;

  Projects : object;
  
  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  events: any = [];



  constructor(private AR : ActivatedRoute, private router: Router, private prjmSevice: PrjmService) { }

  ngOnInit() {
    this.Keys = Object.keys;
    

    this.Subs1 = this.AR.params.subscribe(param => {
      this.Query = param.prjm_id;
    });



  
  }

  
  ngAfterViewInit(){

    this.loadEvents();
    this.calendarOptions = {

      editable: false,
      eventLimit: false,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },
      selectable: true,
      events: this.events,
      };

  }

  clearEvents() {
    this.events = [];
  }
  loadEvents() {
    this.clearEvents();
    this.prjmSevice.getProjectByID({'prjm_id': this.Query}).subscribe(project => {
      this.Projects = project.projects;
      this.events.push({title: project.projects.name, start: project.projects.startDate, end: project.projects.endDate, backgroundColor: '#4CAF50'})
      for(let mile in project.projects.milestones){
        this.events.push({title: project.projects.milestones[mile].milestone_name, start: project.projects.milestones[mile].milestone_startDate, end: project.projects.milestones[mile].milestone_endDate });
        for(let task in project.projects.milestones[mile].tasks){
         this.events.push({title: project.projects.milestones[mile].tasks[task].task_name, start: project.projects.milestones[mile].tasks[task].task_startDate, end : project.projects.milestones[mile].tasks[task].task_endDate, backgroundColor: 'red'}) 
        }
      }

    });
  }

  ngOnDestroy(){

  }

}
