import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PrjmService } from '../../prjm.service';


import swal from 'sweetalert2';
import { Subscription } from 'rxjs/Subscription';
import { AdminService } from '../../../admin/admin.service';


@Component({
  selector: 'app-project-team',
  templateUrl: './project-team.component.html',
  styleUrls: ['./project-team.component.css']
})
export class ProjectTeamComponent implements OnInit, OnDestroy, AfterViewInit {

  Keys: any;
  PID : any;

  //Objects
  Members: any;

  //Subs
  Mem_Sub : Subscription;

  //Models
  Member_ID : any; 


  UserRole : any;

  POS: Object;
  constructor(private prjm : PrjmService, private router : Router, private AR : ActivatedRoute, private adminSc : AdminService) { }

  ngOnInit() {

    this.Keys = Object.keys;

    this.AR.params.subscribe(q => {
      this.PID = q.prjm_id;
    });

    this.Mem_Sub = this.prjm.getAllMembers({"id" : this.PID}).subscribe(pr => {
      if(pr.success){
        this.Members = pr.result;
      }
    }); 

    this.adminSc.getCoreDataUsers().subscribe(data => {
        this.POS = data;
    });
  }


  checkRole(f){
    for ( let fx in f ) {
      if(JSON.parse(localStorage.getItem('user')).id == f[fx]['user']['_id']){
        return f[fx].role < 2;
      }
    }
  }

  convertKey(key){
    return key == null ? [] : this.Keys(key) ;
  }

  checkObj(val){
    return val instanceof Array ? val.length == 0 : val == null ;
  }

  ngAfterViewInit(){
    
  }

  addMember(){
    var details = {
      uid : this.Member_ID,
      id : this.PID
    };

    this.prjm.addMember(details).subscribe(res => {

        if(res.success){
          swal("Yipee!", res.msg, "success");
          this.Member_ID = "";
          this.Mem_Sub = this.prjm.getAllMembers({"id" : this.PID}).subscribe(pr => {
            if(pr.success){
              this.Members = pr.result;
            }
          });
        }else{
          swal("Oh no!", res.msg, "warning");
          this.Member_ID = "";
        }

    });
  }

  kickMember(userID){
    console.log(userID);
    var details = {
      uid : userID,
      id : this.PID
    };

    this.prjm.kickMember(details).subscribe(res => {
      if(res.success){
        swal("Kicked!", res.msg, "info");
        this.Mem_Sub = this.prjm.getAllMembers({"id" : this.PID}).subscribe(pr => {
          if(pr.success){
            this.Members = pr.result;
          }
        });
      }
    });
  }
  //#region Profile
  
  vProfile : any;
  viewProfile(data){
    this.vProfile = data;
  }



  //#endregion
  ngOnDestroy(){
    this.Mem_Sub.unsubscribe();
  }

}
