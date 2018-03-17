import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PrjmService } from '../../prjm.service';
import swal from 'sweetalert2';

import * as FileSaver from 'file-saver';
import { Subscription } from 'rxjs/Subscription';

declare var $:any;

@Component({
  selector: 'app-project-mile',
  templateUrl: './project-mile.component.html',
  styleUrls: ['./project-mile.component.css']
})
export class ProjectMileComponent implements OnInit, OnDestroy, AfterViewInit {

  //Subs
  AR_Sub : Subscription;
  Mile_Sub : Subscription;
  Tasks_Sub : Subscription;
  Mem_Sub : Subscription;

  //Models
  Milestone : Object;
  Tasks : Object;
  Members : Object;

  
  //Keys
  Keys : any;

  //Query
  Query : any;

  //Milestone Schema
  milestoneName : String;
  milestoneDesc : String;

  myTasks : any = [];
  requests : any = [];
  
  curInfoProg : Object;
  curInfoCom : Object;
  curTask : any;

  //currentID
  MileID : any;

  //Task Schema
  taskName : String;
  taskDesc : String;
  taskAssigned: any;
  

  //Comply
  task_submit_comment: any;
  task_file_attachment: File;

  constructor(private router : Router, private prjmSevice : PrjmService, private AR: ActivatedRoute) { }

  ngOnInit() {
    
    this.Keys = Object.keys;

    this.AR_Sub = this.AR.params.subscribe(param => {
      this.Query = param.prjm_id;
      this.MileID = param.mile_id;
    });


    this.Mem_Sub = this.prjmSevice.getAllMembers({"id" : this.MileID}).subscribe(pr => { 
      this.Members = pr.result;
    });

    this.Mile_Sub = this.prjmSevice.getMilestone({"id" : this.Query}).subscribe(milestone => {
      this.Milestone = milestone.milestone;
    });

    
    setInterval(() => this.loadTasks(), 500);

  }

  ngAfterViewInit(){
    this.loadDateTime();
    this.formload();
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

  loadTasks(){
    

    this.Tasks_Sub = this.prjmSevice.getTasks({"mile_id" : this.Query}).subscribe(tasks => {      
      if(this.Tasks != tasks.tasks){

        this.Tasks = tasks.tasks;
        this.myTasks = [];
        this.requests = [];
        this.curInfoCom = null;
        this.curInfoProg = null;
        
        for(let task of this.convertKey(this.Tasks)){
          if(JSON.parse(localStorage.getItem("user")).id == this.Tasks[task]['task_assigned']['_id']){
            this.myTasks.push(this.Tasks[task]);
          }else if(this.Tasks[task]['task_send'] && !this.Tasks[task]['task_confirmed']){
            this.requests.push(this.Tasks[task]);
          }  
        }
      }
    });

    
  }

  fileChange($event : Event){
    this.task_file_attachment = $event.target['files'][0];
  }

  completed(Task){
    return Task ? 'green' : 'pink';
  }

  taskcolor(task){
    var color = "";

    if(task['task_confirmed']) {
      color = 'success';
    }else{
      if(task['task_send']){
        color = 'warning';
      }else{
        color = 'primary';
      }
    }

    return color;

  }


  isOwner(){
    return JSON.parse(localStorage.getItem("user")).id == this.Milestone['project_id']['owner'];
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

  onSubmitTask(){
    let milestoneDetails = {
      mile_id : this.Query,
      tasks : {
        milestone_id : this.Query,
        task_name : this.taskName,
        task_startDate: sessionStorage.getItem('TSED'),
        task_endDate: sessionStorage.getItem('TPED'),
        task_desc : this.taskDesc,
        task_assigned : this.taskAssigned
      }
    }

    $('#taskClose').click();

    this.prjmSevice.addTask(milestoneDetails).subscribe(data => {
      if(data.success){
        swal("Wonderful!", "New task was added", "success");
        this.loadTasks();
      }
    });

    
  }

  setCur(id){
    this.curTask = id;
  }

  onComplyTask(){
    var frmData : FormData = new FormData();

    frmData.append('task_file_attachment', this.task_file_attachment, this.task_file_attachment.name);
    frmData.append('task_submit_comment', this.task_submit_comment);
    frmData.append('id', this.curTask);

    swal({
      title: "You about to submit your work",
      text: "Are you sure of this?",
      type: "warning",
      showConfirmButton: true,
      showCancelButton: true
    }).then(res => {
      if(res.value){
        this.prjmSevice.complyTask(frmData).subscribe(res => {
          if(res.success){
            swal({
              title: "Horray!",
              text: res.msg,
              type: "success"
            });
          }else{
            swal({
              title: "Oops!",
              text: "Something goes wrong T^T",
              type: "error"
            });
          }
        });
      }

      $('#ComplyClose').click();
      this.loadTasks();
    });
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

  getTaskInfo(index){
    //this.curInfoProg = this.inProgress[index];
  }

  getTaskcomplete(index){
    //this.curInfoCom = this.completed[index];
  }

  updateComplete(index, stats){
    this.prjmSevice.updateTask({'id' : index, 'status' : stats}).subscribe(task => {
      if(task.success){
        this.loadTasks();
      }
    });
  }

  updateTaskSubmission(index, stats){
    this.prjmSevice.updateSubmission({'id': index, 'status': stats}).subscribe(task => {
      if(task.success){
        this.loadTasks();
      }
    });
  }

  downloadAttachment(file){
    this.prjmSevice.downloadAttachment({'downloadfile': file}).subscribe(res => {
      FileSaver.saveAs(res, file);
    });
  }

  ngOnDestroy(){
    this.AR_Sub.unsubscribe();
    this.Mile_Sub.unsubscribe();
    this.Tasks_Sub.unsubscribe();
  }
  
}
