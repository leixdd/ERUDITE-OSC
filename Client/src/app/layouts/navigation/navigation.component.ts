import { Component, OnInit, AfterViewInit } from '@angular/core';


declare var $:any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.formload();
  }

  formload(){
        //On focus event
        $('.form-control').focus(function () {
          $(this).parent().addClass('focused');
      });
  
      //On focusout event
      $('.form-control').focusout(function () {
          var $this = $(this);
          if ($this.parents('.form-group').hasClass('form-float')) {
              if ($this.val() == '') { $this.parents('.form-line').removeClass('focused'); }
          }
          else {
              $this.parents('.form-line').removeClass('focused');
          }
      });
  
      //On label click
      $('body').on('click', '.form-float .form-line .form-label', function () {
          $(this).parent().find('input').focus();
      });
  
      //Not blank form
      $('.form-control').each(function () {
          if ($(this).val() !== '') {
              $(this).parents('.form-line').addClass('focused');
          }
      });
  }

}
