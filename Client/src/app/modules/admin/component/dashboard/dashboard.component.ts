import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../admin.service';
import { UsmService } from '../../../usm/usm.service';
import { Subscription } from 'rxjs/Subscription';

declare var $:any;

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './Admindashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class AdminDashboardComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private router : Router, private adminSC : AdminService, private usm : UsmService) { }

  user : any;
  analytics : any;

  usmSub : Subscription;
  alySub : Subscription;
  cduSub : Subscription;
  cdpSub : Subscription;

  CDU : Object;
  CDP : Object; 

  Keys : any;
  ngOnInit() {

    this.Keys = Object.keys;

    this.usmSub = this.usm.getProfile().subscribe(profile => {
      this.user = profile.user
      if(profile.user.SA == undefined){
        this.router.navigate(['/']);
      }
  
    },
    err => {
      return false;
    })

    this.alySub = this.adminSC.getAnalytics().subscribe(aly => {
      this.analytics = aly;
    });

    this.cduSub = this.adminSC.getCoreDataUsers().subscribe(cdu => {
      this.CDU = cdu;
    });
  
    this.cdpSub = this.adminSC.getCoreDataProjects().subscribe(cdp => {
      this.CDP = cdp;
    })
  
  }


  convertKey(key){
    return key == null ? [] : this.Keys(key) ;
  }

  checkObj(val){
    return val instanceof Array ? val.length == 0 : val == null ;
  }

  
  ngAfterViewInit(){
    $('.count-to').countTo();

    $('.js-exportable').DataTable({
        dom: 'Bfrtip',
        responsive: true,
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });
    
  }

  ngOnDestroy(){

    this.alySub.unsubscribe();
    this.usmSub.unsubscribe();
    this.cduSub.unsubscribe();

  }


}
