import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsmService } from '../../usm.service';
import { PrjmService } from '../../../prjm/prjm.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user : Object;
  Keys : any;
  Projects: Object;

  constructor(private usm : UsmService, private pjrmService : PrjmService) { }

  ngOnInit() {

    this.Keys = Object.keys;
    this.usm.getProfile().subscribe(profile => {
      this.user = profile.user.userDetails;
    })

    this.pjrmService.getProject({"owner_id" : JSON.parse(localStorage.getItem('user')).id}).subscribe(data => {
      this.Projects = data.projects;
    });
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

      return ((counter / milestone.length) * 100).toFixed(2);
    
    }
  }

  projectDash(){
    console.log("it was click bitch");
  }

}
