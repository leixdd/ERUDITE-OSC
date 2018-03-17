import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsmService } from './../../usm.service';
import { Router } from '@angular/router';
import { RcService } from '../../../rc/rc.service';

@Component({
  selector: 'app-dash-layout',
  templateUrl: './dash-layout.component.html',
  styleUrls: ['./dash-layout.component.css']
})
export class DashLayoutComponent implements OnInit, OnDestroy {

  user : Object;
  username : any;
  Projects : Object;
  Keys : any;
  inMessage : any;
  messages : any = [];

  constructor(private usm : UsmService, private router: Router, private rc : RcService) { }

  ngOnInit() {
    this.Keys = Object.keys;

    this.usm.getProfile().subscribe(profile => {
      this.user = profile.user.userDetails;
      this.username = profile.user.loginDetails.username;
    }),
    err => {
      return false;
    }

    this.usm.getAllProjects().subscribe(project => {
      this.Projects = project.projects;
    });

    this.rc.getMessage().subscribe(data => {
      this.messages.push(data);
      console.log(data);
    })

  }

  convertKey(key){
    return key == null ? [] : this.Keys(key) ;
  }

  sendMessage(){
    this.rc.sendMessage(
      '<div class="media">' +
        '<div class="media-left">' +
          '<img class="img-rounded" src="../assets/uploads/avatars/' + this.user['picture'] + '" width="48" height="48"/>' + 
        '</div>' +
      '<div class="media-body">' +
        '<h4 class="media-heading">'+ this.username +'</h4>' +
        '<p>'+ this.inMessage + '</p>' +
      '</div>' +
    '</div>'
    );
    this.inMessage = "";
  }

  ngOnDestroy(){

  }

}
