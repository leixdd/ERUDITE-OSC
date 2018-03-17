import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsmService } from './../../usm.service';
import { element } from 'protractor';


import swal from 'sweetalert2';

declare var $:any;

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit, AfterViewInit {

  user: any;
  uKeys : any; 
  models: any = {};
  dummySkill: String = "";
  message: String;
  type: String;

  constructor(private usm : UsmService, private router: Router) { }

  ngOnInit() {


    this.uKeys = Object.keys;

    this.usm.AccountSettings().subscribe(profile => {
      this.user = profile.user;
      this.models = profile.user;
  
    },
    err  => {
      return false;
    });

  }

ngAfterViewInit(){
  
}
  checkArray(obj){
    return obj instanceof Array 
  }

  checkObject(obj){
    return obj instanceof Object
  }

  addnewskill(){
    
    let validity = true;
    if(this.dummySkill == "" || this.dummySkill == ' '){
      this.message = "Skill input is empty";
      this.type = "danger";
      validity = false;
    }

    if(this.models.userDetails.skills.indexOf(this.dummySkill) >= 0){
      this.message = this.dummySkill + " is already in your skill list";
      this.type = "danger";
      validity = false;
    }

    if(validity){
      this.message = "";
      this.type = "";
      this.models.userDetails.skills.push(this.dummySkill);
    }
  }

  removeSkill(item){
    this.models.userDetails.skills.splice(this.models.userDetails.skills.indexOf(item), 1);
  }

  onUpdate(){
    this.usm.updateUserData(this.models).subscribe(data => {
      if(data.success){
        swal({
          title: "Wonderful",
          text: "Your account is successfully updated",
          type: "success",
          showConfirmButton: true
        }).then(res => {
          this.router.navigate(['/profile']);
        });
      }else{
        this.message = data.message;
        return false;
      }
    });
  }

}
