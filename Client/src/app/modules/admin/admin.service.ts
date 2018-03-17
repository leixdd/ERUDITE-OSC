import { Injectable } from '@angular/core';

import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

import { tokenNotExpired } from 'angular2-jwt';
import { functions } from './../../config/functions';

@Injectable()
export class AdminService {

  constructor(private f : functions) { }

  getAnalytics(){
    return this.f.post('/admin/analytics', {}, true).map(res => res.json());
  }


  getCoreDataUsers(){
    return this.f.get('/admin/coredatausers', true).map(res => res.json());
  }


  getCoreDataProjects(){
    return this.f.get('/admin/coredataprojects', true).map(res => res.json());
  }

  
}
