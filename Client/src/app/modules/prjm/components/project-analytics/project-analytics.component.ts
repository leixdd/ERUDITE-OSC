import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PrjmService } from '../../prjm.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { RcService } from '../../../rc/rc.service';
import { UsmService } from '../../../usm/usm.service';

declare var $:any;

@Component({
  selector: 'app-project-analytics',
  templateUrl: './project-analytics.component.html',
  styleUrls: ['./project-analytics.component.css']
})
export class ProjectAnalyticsComponent implements OnInit, OnDestroy, AfterViewInit {

  
  Projects : any;
  Keys : any;
  Query : Object;
  Milestones : Object;
  Subs1 : Subscription;
  Subs2 : Subscription;
  

  //Subs
  AR_Sub : Subscription;
  Mile_Sub : Subscription;
  Tasks_Sub : Subscription;
  Project_Sub : Subscription;

  //Models
  MilestonesTbl : Object;
  Tasks : Object;

  //Milestone Schema
  milestoneName : String;
  milestoneDesc : String;

  //currentID
  MileID : any;

  //Task Schema
  taskName : String;
  taskDesc : String;


  //Team Schema
  teamMembers : any;


  MemberList : object = {};
  UserRole : any; 
  

  messages : any = [];
  user : any;
  username : any;
  inMessage : any;

  
  constructor(private AR : ActivatedRoute, private router : Router, private usm: UsmService, private prjmSevice : PrjmService, private rc  : RcService) { }

  ngOnInit() {

    this.Keys = Object.keys;
    

    this.Subs1 = this.AR.params.subscribe(param => {
      this.Query = param.prjm_id;
    });
  
    this.ProjectLoad();
    this.MilestoneLoad();
    this.membersCount();
    this.joinRoom();
    this.getResponseRoom();
    this.getGroupMessage();
  }

  sendGroupMessage(){
    
    if(this.inMessage.search("help add-member") != -1){
      this.messages.push("Click 'Team' at the navbar and add the username in the control on the right side pane");
    }if(this.inMessage.search("help add-milestones") != -1){
      this.messages.push("Click 'milestones' then new milestone");
    }else{
      this.rc.sendGroupMessage(this.Query,
        '<div class="media">' +
          '<div class="media-left">' +
            '<img class="img-rounded" src="../assets/uploads/avatars/' + JSON.parse(localStorage.getItem('user')).picture + '" width="48" height="48"/>' + 
          '</div>' +
        '<div class="media-body">' +
          '<h4 class="media-heading">'+ JSON.parse(localStorage.getItem('user')).username +'</h4>' +
          '<p>'+ this.inMessage + '</p>' +
        '</div>' +
      '</div>'
      );  
    }

    this.inMessage = "";
  }
  getGroupMessage(){
    this.rc.getGroupMessage().subscribe(data => {
      this.messages.push(data);
    })
  }

  joinRoom(){
    this.rc.enterRoom(this.Query, JSON.parse(localStorage.getItem('user')).username);
  }

  getResponseRoom(){
    
    this.rc.getRoomEnterRes().subscribe(data => {
      this.messages.push(data) ;
    });
  }
  membersCount(){
    try {
    var team = this.Projects;
    return team.members.length; 
    } catch (error) {
      
    }
  }

  ProjectLoad(){
    this.Project_Sub = this.prjmSevice.getProjectByID({'prjm_id': this.Query}).subscribe(project => {
      this.Projects = project.projects;

      var memList = {};
  
      for(let mem in project.projects.members){
        this.MemberList[project.projects.members[mem].user] = project.projects.members[mem].role
        if(JSON.parse(localStorage.getItem('user')).id == project.projects.members[mem].user){
          this.UserRole =  project.projects.members[mem].role;
        }
      }
      
      //throw out unwanted users
      if(this.MemberList[JSON.parse(localStorage.getItem('user')).id] == null){
        this.router.navigate(['/']);
      }

    });
  }

  MilestoneLoad(){
    this.Subs2 = this.prjmSevice.getMilestones({'id' : this.Query}).subscribe(milestones => {
      this.Milestones = milestones.milestones;
    });
  }

    
  ngAfterViewInit(){
      this.loadDateTime();
  }

  datediff(date2 : any){
    return new Date(date2) > new Date() ? Math.round(Math.abs(new Date(date2).getTime() - new Date().getTime()) / (1000 * 3600 * 24)) : 0;
  }

  loadDateTime(){
   

  $('#projectSDate').datetimepicker({
    format: 'YYYY-MM-DD',
    ignoreReadonly: true,
    defaultDate: new Date().toLocaleDateString(),
  });

  $('#projectSDate').focusout(function(){
    sessionStorage.setItem('SED', $(this).val());

    $('#endDate').datetimepicker({
        format: 'YYYY-MM-DD',
        ignoreReadonly: true,
        minDate: new Date($('#projectSDate').val()),
        defaultDate: new Date($('#projectSDate').val()),
    });
  });

  $('#endDate').focusout(function(){
    sessionStorage.setItem('PED', $(this).val());
  })

  $('#tasks-projectSDate').datetimepicker({
    format: 'YYYY-MM-DD',
    ignoreReadonly: true,
    defaultDate: new Date().toLocaleDateString(),
  });


  $('#tasks-projectSDate').focusout(function(){
    sessionStorage.setItem('TSED', $(this).val());
        
      $('#tasks-endDate').datetimepicker({
        format: 'YYYY-MM-DD',
        ignoreReadonly: true,
        minDate: new Date($('#tasks-projectSDate').val()),
        defaultDate: new Date($('#tasks-projectSDate').val()) 
    });
    
  });

  $('#tasks-endDate').focusout(function(){
    sessionStorage.setItem('TPED', $(this).val());
  });
  }

    //Procedures
    onSubmit(){
      let milestoneDetails = {
        prjm_id : this.Query,
        milestones : {
          project_id : this.Query,
          milestone_name : this.milestoneName,
          milestone_startDate: sessionStorage.getItem('SED'),
          milestone_endDate: sessionStorage.getItem('PED'),
          milestone_desc : this.milestoneDesc,
        }
      }
  
      this.prjmSevice.addMilestones(milestoneDetails).subscribe(data => {
        if(data.success){
          this.Mile_Sub = this.prjmSevice.getMilestones({"id" : this.Query}).subscribe(milestones => {
            this.Milestones = milestones.milestones;
          });
        }
      });
  
    }
  
    onSubmitTask(){
      let milestoneDetails = {
        mile_id : this.MileID,
        tasks : {
          milestone_id : this.MileID,
          task_name : this.taskName,
          task_startDate: sessionStorage.getItem('TSED'),
          task_endDate: sessionStorage.getItem('TPED'),
          task_desc : this.taskDesc,
        }
      }
  
      this.prjmSevice.addTask(milestoneDetails).subscribe(data => {
        if(data.success){
          this.Tasks_Sub = this.prjmSevice.getTasks({"mile_id" : this.MileID}).subscribe(tasks => {
            this.Tasks = tasks.tasks;
          })
        }
      });
  
    }

    viewTasks(mile){
      this.MileID = mile;
      this.Tasks_Sub = this.prjmSevice.getTasks({"mile_id" : this.MileID}).subscribe(tasks => {
        this.Tasks = tasks.tasks;
      })
    }

  //routes
  navigateToMilestones(){
    this.router.navigate(['/project/milestones', this.Query]);
  }

  getMonth(date){
    var Months =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    return Months[new Date(date).getMonth()];
  }
  
  getDay(day){
    return new Date(day).getDate();
  }

  convertDate(date){
    return new Date(date).toLocaleDateString();
  }

  convertKey(key){
    return key == null ? [] : this.Keys(key) ;
  }

  checkObj(val){
    return val instanceof Array ? val.length == 0 : val == null ;
  }

  getProgress(milestone){
    if(this.checkObj(milestone)){
      return 0;
    }else{

      var counter = 0;
      for(var m in milestone){
        counter += milestone[m].isCompleted == true ? 1 : 0; 
      }

      return ((counter / milestone.length) * 100).toFixed(0);
    
    }
  }

  updateMile(id, stat){
    this.prjmSevice.updateMile({'id' : id, 'stat' : stat});
  }

  ngOnDestroy(){
    this.Subs1.unsubscribe();
    this.Subs2.unsubscribe();
    //this.Tasks_Sub.unsubscribe();
    
  }

}
