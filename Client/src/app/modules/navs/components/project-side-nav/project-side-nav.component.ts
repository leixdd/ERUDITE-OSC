import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsmService } from '../../../usm/usm.service';
import { Subscription } from 'rxjs/Subscription';
import { PrjmService } from '../../../prjm/prjm.service';

declare var $:any;

@Component({
  selector: 'app-project-side-nav',
  templateUrl: './project-side-nav.component.html',
  styleUrls: ['./project-side-nav.component.css']
})
export class ProjectSideNavComponent implements OnInit, AfterViewInit {

  user: any;
  Project_Sub : Subscription
  Projects : any;
  Keys : any;
  Subs1 : Subscription;
  Subs2 : Subscription;
  Query : any;
  Milestones : Object;
  email: any;
  picture: any;
  MemberList : object = {};
  UserRole : any;
  
  constructor(private usm : UsmService, private prjmService : PrjmService, private router : Router, private AR : ActivatedRoute) { }

  
  ngOnInit() {
    this.usm.getProfile().subscribe(profile => {
      this.user = profile.user.userDetails;
      this.email = profile.user.loginDetails.email;
      this.picture = profile.user.userDetails.picture;
    }),
    err => {
      return false;
    }

    this.Keys = Object.keys;
    

    this.Subs1 = this.AR.params.subscribe(param => {
      if(param.mile_id != null){
          this.Query = param.mile_id;
      }else{
          this.Query = param.prjm_id;
      }
    });


    this.Project_Sub = this.prjmService.getProjectByID({'prjm_id': this.Query}).subscribe(project => {
      this.Projects = project.projects;

      var memList = {};
  
      for(let mem in project.projects.members){
        this.MemberList[project.projects.members[mem].user] = project.projects.members[mem].role
        if(JSON.parse(localStorage.getItem('user')).id == project.projects.members[mem].user){
          this.UserRole =  project.projects.members[mem].role;
        }
      }
      
      //throw out unwanted users
      if(this.MemberList[JSON.parse(localStorage.getItem('user')).id] == null){
        this.router.navigate(['/']);
      }

    });

    this.Subs2 = this.prjmService.getMilestones({'id' : this.Query}).subscribe(milestones => {
        this.Milestones = milestones.milestones;
      });

  }
    
  ngAfterViewInit(){
    this.leftSideBar();
  }

  leftSideBar(){
    var $body = $('body');
    var $overlay = $('.overlay');


    $("#cls-btn").click(function(){
        $('#leftsidebar').css('width', '0px');
        $('.content').css('margin-left', '0px');
    });
    //Close sidebar
    $(window).click(function (e) {
        var $target = $(e.target);
        if (e.target.nodeName.toLowerCase() === 'i') { $target = $(e.target).parent(); }

        if (!$target.hasClass('bars') && $('body').hasClass('overlay-open') && $target.parents('#leftsidebar').length === 0) {
            if (!$target.hasClass('js-right-sidebar')) $overlay.fadeOut();
            $body.removeClass('overlay-open');
        }
    });

    $.each($('.menu-toggle.toggled'), function (i, val) {
        $(val).next().slideToggle(0);
    });

    //When page load
    $.each($('.menu .list li.active'), function (i, val) {
        var $activeAnchors = $(val).find('a:eq(0)');

        $activeAnchors.addClass('toggled');
        $activeAnchors.next().show();
    });

    //dropdowns
    $('.menu-toggle').click(function (e) {
      var $this = $(this);
      var $content = $this.next();
  
      if ($($this.parents('ul')[0]).hasClass('list')) {
          var $not = $(this).hasClass('menu-toggle') ? this : $(e.target).parents('.menu-toggle');
  
          $.each($('.menu-toggle.toggled').not($not).next(), function (i, val) {
              if ($(val).is(':visible')) {
                  $(val).prev().toggleClass('toggled');
                  $(val).slideUp();
              }
          });
      }
  
      $this.toggleClass('toggled');
      $content.slideToggle(320);
    });

    this.menuHeight();
    this.resizeNav(true);


    $(window).resize(function () {
      if (typeof $.fn.slimScroll != 'undefined') {
        var configs = {
            scrollColor: 'rgba(0,0,0,0.5)',
            scrollWidth: '4px',
            scrollAlwaysVisible: false,
            scrollBorderRadius: '0',
            scrollRailBorderRadius: '0',
            scrollActiveItemWhenPageLoad: true,
            breakpointWidth: 1500
        };
        var height = ($(window).height() - ($('.legal').outerHeight() + $('.user-info').outerHeight() + $('.navbar').innerHeight()));
        var $el = $('.list');

        $el.slimscroll({
            height: height + "px",
            color: configs.scrollColor,
            size: configs.scrollWidth,
            alwaysVisible: configs.scrollAlwaysVisible,
            borderRadius: configs.scrollBorderRadius,
            railBorderRadius: configs.scrollRailBorderRadius
        });

        //Scroll active menu item when page load, if option set = true
        if (configs.scrollActiveItemWhenPageLoad) {
            var activeItemOffsetTop = $('.menu .list li.active')[0].offsetTop
            if (activeItemOffsetTop > 150) $el.slimscroll({ scrollTo: activeItemOffsetTop + 'px' });
        }
    }
    var $body = $('body');
    var $openCloseBar = $('.navbar .navbar-header .bars');
    var width = $body.width();
    var firstTime = false;
    if (firstTime) {
        $body.find('.content, .sidebar').addClass('no-animate').delay(1000).queue(function () {
            $(this).removeClass('no-animate').dequeue();
        });
    }

    if (width < 1500) {
        $body.addClass('ls-closed');
        $openCloseBar.fadeIn();
    }
    else {
        $body.removeClass('ls-closed');
        $openCloseBar.fadeOut();
    }
    });


    
  }

  menuHeight(){
    if (typeof $.fn.slimScroll != 'undefined') {
        var configs = {
            scrollColor: 'rgba(0,0,0,0.5)',
            scrollWidth: '4px',
            scrollAlwaysVisible: false,
            scrollBorderRadius: '0',
            scrollRailBorderRadius: '0',
            scrollActiveItemWhenPageLoad: true,
            breakpointWidth: 1500
        };
        var height = ($(window).height() - ($('.legal').outerHeight() + $('.user-info').outerHeight() + $('.navbar').innerHeight()));
        var $el = $('.list');

        $el.slimscroll({
            height: height + "px",
            color: configs.scrollColor,
            size: configs.scrollWidth,
            alwaysVisible: configs.scrollAlwaysVisible,
            borderRadius: configs.scrollBorderRadius,
            railBorderRadius: configs.scrollRailBorderRadius
        });

        //Scroll active menu item when page load, if option set = true
        if (configs.scrollActiveItemWhenPageLoad) {
            var activeItemOffsetTop = $('.menu .list li.active')[0].offsetTop
            if (activeItemOffsetTop > 150) $el.slimscroll({ scrollTo: activeItemOffsetTop + 'px' });
        }
    }
  }


  resizeNav(firstTime){
    var $body = $('body');
    var $openCloseBar = $('.navbar .navbar-header .bars');
    var width = $body.width();
    console.log(width);
    if (firstTime) {
        $body.find('.content, .sidebar').addClass('no-animate').delay(1000).queue(function () {
            $(this).removeClass('no-animate').dequeue();
        });
    }

    if (width < 1500) {
        $body.addClass('ls-closed');
        $openCloseBar.fadeIn();
    }
    else {
        $body.removeClass('ls-closed');
        $openCloseBar.fadeOut();
    }
  }


  datediff(date2 : any){
    return new Date(date2) > new Date() ? Math.round(Math.abs(new Date(date2).getTime() - new Date().getTime()) / (1000 * 3600 * 24)) : 0;
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

}
