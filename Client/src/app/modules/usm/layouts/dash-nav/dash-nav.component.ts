import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsmService } from './../../usm.service';

declare var $:any;

@Component({
  selector: 'app-dash-nav',
  templateUrl: './dash-nav.component.html',
  styleUrls: ['./dash-nav.component.css']
})
export class DashNavComponent implements OnInit, AfterViewInit {

  user : Object;
  task : Object;
  constructor(private usmService: UsmService, private router : Router) { }

  ngOnInit() {
    this.usmService.getProfile().subscribe(profile => {
      this.user = profile.user.userDetails
    })

    this.usmService.getUserTasks({"id" : JSON.parse(localStorage.getItem('user')).id}).subscribe(data => {
      this.task = data.result;
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
  logout(){
    this.usmService.logoutUser();
    this.router.navigate(['/']);
  }
}
