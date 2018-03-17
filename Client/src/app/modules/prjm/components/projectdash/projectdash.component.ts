import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PrjmService } from '../../prjm.service';
import { Router } from '@angular/router';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-projectdash',
  templateUrl: './projectdash.component.html',
  styleUrls: ['./projectdash.component.css']
})
export class ProjectdashComponent implements OnInit, OnDestroy{

  Keys : any;
  Projects : Object;
  UserList: Object;
  Subs : Subscription;
  User : Object;

  constructor(private pjrmService : PrjmService, private router : Router) { }

  //todo
  ngOnInit() {

    this.Keys = Object.keys;
    
    this.Subs = this.pjrmService.getProject({"owner_id" : JSON.parse(localStorage.getItem('user')).id}).subscribe(data => {
      this.Projects = data.projects;
    });

  }

  
  ngOnDestroy(){
    this.Subs.unsubscribe();
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




  projectDash(item){
    this.router.navigate(['/project', item]);
  }

}
