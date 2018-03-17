import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

import { APP_CONFIG } from './../../config/config';

import { functions } from './../../config/functions';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class UsmService {

  authToken: any;
  user: any;
  dop : String;


  constructor(private http:Http, private f : functions ) {
    this.dop = APP_CONFIG.Protocol + "://" + APP_CONFIG.Address + "/";
   }


  loggedIn(){
    return tokenNotExpired('id_token');
  }

  registerUser(user){
    let headers = new Headers();
    return this.http.post(this.dop + 'users/register', user, {headers: headers})
    .map(res => res.json());
  }

  checkUsernameIsExisting(uname){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.dop + 'users/UsernameExist', uname, {headers: headers})
    .map(res => res.json());
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.dop + 'users/auth', user, {headers: headers})
    .map(res => res.json());
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.dop + 'users/profile', {headers: headers})
    .map(res => res.json());
  }

  getUserTasks(send){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.dop + 'users/userTask', send, {headers: headers})
    .map(res => res.json());
  }

  AccountSettings(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.dop + 'users/accSettings', {headers: headers})
    .map(res => res.json());  
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  updateUserData(user){
    let headers = new Headers();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.dop + 'users/updateUser', user, {headers: headers})
    .map(res => res.json());
  }

  getAllProjects(){
    return this.f.post('/projects/getProjectsAllPublic', [], true).map(res => res.json());
  }


  logoutUser(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  validateRegister(user){
    if(user.firstname == undefined || user.lastname == undefined  || user.middlename == undefined || user.email == undefined || user.password == undefined || user.username == undefined){
      return false;
    }else{
      return true;
    }
  }

  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  }
  

  //testing uploads
  upload(data){
    let headers = new Headers();
    return this.http.post(this.dop + 'users/uploadPhoto', data, {headers : headers})
    .map(res => res.json());
  }
}
