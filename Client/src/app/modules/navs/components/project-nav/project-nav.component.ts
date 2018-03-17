import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UsmService } from '../../../usm/usm.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-project-nav',
  templateUrl: './project-nav.component.html',
  styleUrls: ['./project-nav.component.css']
})
export class ProjectNavComponent implements OnInit, AfterViewInit {

  user: any;
  Query: any = null;
  Mile : any = null;
  Subs1 : Subscription;

  constructor(private usmService : UsmService, private router : Router, private AR : ActivatedRoute) { }

  ngOnInit() {
    this.usmService.getProfile().subscribe(profile => {
      this.user = profile.user.userDetails
    });

    this.Subs1 = this.AR.params.subscribe(param => {
      //console.log(param.prjm_id);
      if(param.mile_id != null){
        this.Query = param.mile_id;
        this.Mile = param.prjm_id;
      }else{
        this.Query = param.prjm_id;
      }

    });

  }

  ngAfterViewInit(){
    this.startNavs();
  }
  
  startNavs(){

    var $body = $('body');
    var $overlay = $('.overlay');

    //Open left sidebar panel
    $('.bars').on('click', function () {
        $body.toggleClass('overlay-open');
        if ($body.hasClass('overlay-open')) { $overlay.fadeIn(); } else { $overlay.fadeOut(); }
    });

    //Close collapse bar on click event
    $('.nav [data-close="true"]').on('click', function () {
        var isVisible = $('.navbar-toggle').is(':visible');
        var $navbarCollapse = $('.navbar-collapse');

        if (isVisible) {
            $navbarCollapse.slideUp(function () {
                $navbarCollapse.removeClass('in').removeAttr('style');
            });
        }
    });


  }
}
