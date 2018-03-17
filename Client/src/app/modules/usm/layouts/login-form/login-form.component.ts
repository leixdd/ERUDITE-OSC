import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsmService } from './../../usm.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {


  username: any;
  password: any;
  message: String;
  status: String;
  locked: boolean;
  subs : any;

  counter = 0;

  constructor(private usmService : UsmService,
              private router : Router) { }

  ngOnInit() {
  }


  onLogin(){
    const login_details = {
      username : this.username,
      password : this.password
    }

    if(this.username == undefined){
      this.message = "Username is empty",
      this.status = "danger" //bootstrap       
      return false;
    }

    if(this.password == undefined){
      this.message = "Password is empty",
      this.status = "danger" //bootstrap       
      return false;
    }

    this.usmService.authenticateUser(login_details).subscribe(data => {
      if(data.success){
        this.usmService.storeUserData(data.token, data.user);
        this.router.navigate(['/dashboard']);
      }else{
        if(data.error == "ue1"){
          if(this.counter < 3){
            this.message = data.msg;
            this.status = "danger" //bootstrap
            this.counter += 1;
          }else{
            this.message = "Your Account is Locked";
            this.status = "danger" //bootstrap
            this.locked = true;
          }
        }else{
          this.message = data.msg;
          this.status = "warning"; //bootstrap
        }
      }
    });
  }


}
