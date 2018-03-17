import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PrjmService } from '../../prjm.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

import swal from 'sweetalert2';

declare var $:any;
declare var Waves:any;

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.css']
})

export class MilestoneComponent implements OnInit, OnDestroy, AfterViewInit {

  
  Projects : Object;
  Keys : any;
  Query : Object;
  Milestones : Object;
  Subs1 : Subscription;
  Subs2 : Subscription;
 
  UserRole : any;

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

  message : String;


  MemberList : object = {};

  constructor(private AR : ActivatedRoute, private router : Router, private prjmSevice : PrjmService) { }

  ngOnInit() {

    this.Keys = Object.keys;
    
    this.Subs1 = this.AR.params.subscribe(param => {
      this.Query = param.prjm_id;
    });
  
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

    setInterval(() => this.MilestoneLoad(), 500);
  }


  RestrictMemberView(){
    return this.UserRole < 2;   
  }
  
  MilestoneLoad(){
    this.Subs2 = this.prjmSevice.getMilestones({'id' : this.Query}).subscribe(milestones => {
      if(this.Milestones != milestones.milestones){
        this.Milestones = milestones.milestones;
      }
    });
  }

  ngAfterViewInit(){
      this.loadDateTime();
      this.formload();
      Waves.init();
  
    }


  formload(){
          //On focus event
          $('.form-control').focus(function () {
            $(this).parent().addClass('focused');
        });
    
        //On focusout event
        $('.form-control').focusout(function () {
            var $this = $(this);
            if ($this.parents('.form-group').hasClass('form-float')) {
                if ($this.val() == '') { $this.parents('.form-line').removeClass('focused'); }
            }
            else {
                $this.parents('.form-line').removeClass('focused');
            }
        });
    
        //On label click
        $('body').on('click', '.form-float .form-line .form-label', function () {
            $(this).parent().find('input').focus();
        });
    
        //Not blank form
        $('.form-control').each(function () {
            if ($(this).val() !== '') {
                $(this).parents('.form-line').addClass('focused');
            }
        });
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

    validations(){
      var counter = false;
      counter = this.milestoneName != null && this.milestoneName != "" ? true : false;
      counter = this.milestoneDesc != null && this.milestoneName != "" ? true : false;
      return counter;
    }
    onSubmit(){

      if(this.validations()){
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
            swal({
              title: "Success",
              text: "New Milestone is added",
              type: "success"
            }).then((res) => {
              this.Mile_Sub = this.prjmSevice.getMilestones({"id" : this.Query}).subscribe(milestones => {
                this.Milestones = milestones.milestones;
              });
              $('#closeModal').click();
              this.clearmsg();
            });
          }
        });
      }else{
        this.message = "You have empty fields";
      }
  
    }

    clearmsg(){
      this.message = "";
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
          swal({
            title: "Success",
            text: "New Milestone is added",
            type: "success"
          }).then((result) => {
            this.Tasks_Sub = this.prjmSevice.getTasks({"mile_id" : this.MileID}).subscribe(tasks => {
              this.Tasks = tasks.tasks;
            })
          });
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

  Mileprog : Subscription
  updateMile(id, stat){
    this.prjmSevice.updateMile({'id' : id, 'stat' : stat});
  }

  deleteMile(id){
    swal({
      title: "Are you sure want to delete?",
      text: "you can't undo this move after you've delete it",
      type: "warning",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {

      this.prjmSevice.deleteMile({'id' : id}).subscribe(res => {
        if(res.success){
          swal({
            title: "Deleted",
            text: id + " was Deleted",
            type: "success"
          })
        }
      });
      
    });


  }

  ngOnDestroy(){
    this.Subs1.unsubscribe();
    this.Subs2.unsubscribe();
    //this.Tasks_Sub.unsubscribe();
    
  }

}
