import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsmService } from './../../usm.service';

import swal from 'sweetalert2';

declare var $:any;

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit, AfterViewInit {

  firstname: any;
  lastname: any;
  middlename: any;
  username: any;
  password: any;
  email: any;
  message: any;
  confirm_password: any;
  file : File;

  constructor( private usmService : UsmService,
               private router : Router) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.xformload();
  }
  
  fileChange($event : Event){
    this.file = $event.target['files'][0];
  }

  xformload(){
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

  onRegister(){
    
    var frmData : FormData = new FormData();

    
    const userDetails = {
      firstname: this.firstname,
      lastname: this.lastname,
      middlename: this.middlename,
      username: this.username,
      password: this.password,
      email: this.email,
      confirm_password : this.confirm_password
    }

    frmData.append('profile', this.file, this.file.name);
    frmData.append('firstname', this.firstname);
    frmData.append('lastname', this.lastname);
    frmData.append('middlename', this.middlename);
    frmData.append('username', this.username);
    frmData.append('password', this.password);
    frmData.append('email', this.email);
    frmData.append('confirm_password', this.confirm_password);
    // Validation - Require Fields
    if(!this.usmService.validateRegister(userDetails)){
      this.message = "Please check your fields";
      return false;
    }else{
      console.log("passed 1");
    }

    //Validation Email
    if(!this.usmService.validateEmail(userDetails.email)){
      this.message  = "Email is invalid";
      return false;
    }else{
      console.log("passed 2");
    }
    
    if(userDetails.confirm_password != userDetails.password){
      this.message = null;
      this.message = "Passwords are not match";
      return false;
    }else{
      console.log("passed 4");
    }

    //Register User
    swal({
      title: "Halt!",
      text: "Are you sure all of this fields are correct?",
      type: "warning",
      showCancelButton: true,
      showLoaderOnConfirm: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }).then((result) => {
        this.usmService.registerUser(frmData).subscribe(data => {
          if(data.success){
    
            swal({
              title: "Yehey!",
              text: "You were successfully registered",
              type: "success",
              showCancelButton: true
            }).then((res) => {
              this.router.navigate(['/login']);
            });
    
            
          }else{
            this.message = data.msg
            return false;  
          }
        });
    })
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
