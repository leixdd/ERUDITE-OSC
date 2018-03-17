import { Component, OnInit } from '@angular/core';
import { UsmService } from '../usm.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private usm : UsmService, private router : Router) { }

  ngOnInit() {
    this.logout();
  }

  logout(){
    this.usm.logoutUser();
    this.router.navigate(['/']);
  }
}
