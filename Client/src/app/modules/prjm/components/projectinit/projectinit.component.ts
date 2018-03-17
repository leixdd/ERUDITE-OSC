import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PrjmService } from '../../prjm.service';
import { Router } from '@angular/router';

import swal from 'sweetalert2';


declare var $:any;

@Component({
  selector: 'app-projectinit',
  templateUrl: './projectinit.component.html',
  styleUrls: ['./projectinit.component.css']
})

export class ProjectinitComponent implements OnInit, AfterViewInit {

  projectname : String;
  projectdesc : any;
  projectOwner : String;
  projectPrivacy : any = 0;

  constructor(private prjmServices : PrjmService, private router : Router) { }

  ngOnInit() {
  }


  validateInputs(){

    if(this.projectname == null || this.projectname == ""){
      return false;
    }

    if(this.projectdesc == null || this.projectdesc == ""){
      return false;
    }
    
    return true;
  }
  
  onSubmit(){

    if(this.validateInputs()){      
      let projectDetails = {
        name : this.projectname,
        desc : this.projectdesc,
        owner: JSON.parse(localStorage.getItem('user')).id,
        startDate : sessionStorage.getItem('SED'),
        endDate: sessionStorage.getItem('PED'),
        privacy: this.projectPrivacy,
        types : this.skills
      };

      this.prjmServices.initiateProject(projectDetails).subscribe(data => {
        if(data.success){
          swal({
            title: "Wonderful",
            text: this.projectname + " is created, Let's start Collaborating! You would automatically sent to your Project Dashboard.. Please wait",
            type: "success",
            showConfirmButton: true
          }).then(() => {
            this.router.navigate(['/projects']);
          });
          
        }
      });
    }else{
      swal('Oh no!', 'There was something wrong to your inputs', 'warning');
    }

  }

  ngAfterViewInit(){
    this.loadDateTime();
  }

  dummySkill : any = "";
  skills: any = [];
  addnewskill(){
    
    let validity = true;
    if(this.dummySkill == "" || this.dummySkill == ' '){
      swal("Oh! No", "Skill input is empty", "error");
      validity = false;
    }

    if(this.skills.indexOf(this.dummySkill) >= 0){
      swal("Oh! No", this.dummySkill + " is already in your skill list", "error");
      validity = false;
    }

    if(validity){
      this.skills.push(this.dummySkill);
    }
  }

  removeSkill(item){
    this.skills.splice(this.skills.indexOf(item), 1);
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
          defaultDate: new Date($('#projectSDate').val()) 
      });
      
    });
  
    $('#tasks-endDate').focusout(function(){
      sessionStorage.setItem('TPED', $(this).val());
    });
    }


}
