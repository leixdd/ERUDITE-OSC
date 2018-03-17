import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthGuard } from './../../guards/auth.guard';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  constructor(private AuthGuard: AuthGuard, private router : Router) { }

  ngOnInit() {
    if(this.AuthGuard.loggedIn()){
      this.router.navigate(['/dashboard'], {skipLocationChange: true});
    }
  }

}
