
import { Http, Headers, RequestOptions, ResponseContentType} from '@angular/http';

import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

import { APP_CONFIG } from './config';
import { tokenNotExpired } from 'angular2-jwt';
import { Injectable } from '@angular/core';

@Injectable()
export class functions{

    authToken: any;
    dop : any;
    constructor(private http:Http){
        this.dop = APP_CONFIG.Protocol + "://" + APP_CONFIG.Address;
    }

    loggedIn(){
        return tokenNotExpired('id_token');
    }

    loadToken(){
        const token = localStorage.getItem('id_token'); //get Token from localStorage
        this.authToken = token;
     }

    //Creating post function with JWT Authenticaton
    post(url: any, params: any, withAuth?: boolean, formData: boolean = false){

        let headers = new Headers();
        this.loadToken();
        if(withAuth){headers.append('Authorization', this.authToken);}
        if(!formData){headers.append('Content-Type', 'application/json');}
        return this.http.post(this.dop + url, params, {headers: headers});

    }

    blobpost(url: any, params: any, withAuth? : boolean){
        let headers = new Headers();
        this.loadToken();
        if(withAuth){headers.append('Authorization', this.authToken);}
        let options = new RequestOptions({ headers: headers, responseType: ResponseContentType.Blob });
        return this.http.post(this.dop + url, params, options);
    }

    //get request with jwt Authentication
    get(url: any, withAuth?: boolean){
      let headers = new Headers();
      this.loadToken();
      if(withAuth){headers.append('Authorization', this.authToken);}
      headers.append('Content-Type', 'application/json');
      return this.http.get(this.dop + url, {headers: headers});
    }

}
