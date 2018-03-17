import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsmService } from '../../usm.service';

declare var $:any;

@Component({
  selector: 'app-dash-side-nav',
  templateUrl: './dash-side-nav.component.html',
  styleUrls: ['./dash-side-nav.component.css']
})


export class DashSideNavComponent implements OnInit, AfterViewInit {

  user : Object;
  email : any;
  picture : any;
  SA : boolean;

  constructor( private usm : UsmService, private router : Router) { }

  ngOnInit() {
    this.usm.getProfile().subscribe(profile => {
      this.user = profile.user.userDetails;
      this.email = profile.user.loginDetails.email;
      this.picture = profile.user.userDetails.picture;
      this.SA = profile.user.SA != undefined;
    }),
    err => {
      return false;
    }


  }

  ngAfterViewInit(){
    this.leftSideBar();
    this.rightSideBar();
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
            breakpointWidth: 1170
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

  rightSideBar(){
    var $sidebar = $('#rightsidebar');
    var $overlay = $('.overlay');

    //Close sidebar
    $(window).click(function (e) {
        var $target = $(e.target);
        if (e.target.nodeName.toLowerCase() === 'i') { $target = $(e.target).parent(); }

        if (!$target.hasClass('js-right-sidebar') && this.isOpen() && $target.parents('#rightsidebar').length === 0) {
            if (!$target.hasClass('bars')) $overlay.fadeOut();
            $sidebar.removeClass('open');
        }
    });

    $('.js-right-sidebar').on('click', function () {
        $sidebar.toggleClass('open');
        if (this.isOpen()) { $overlay.fadeIn(); } else { $overlay.fadeOut(); }
    });
  }

  isOpen(){
    return $('.right-sidebar').hasClass('open');
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
            breakpointWidth: 1170
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

  logout(){
    this.usm.logoutUser();
    this.router.navigate(['/']);
  }
}
