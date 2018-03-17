import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';

import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

import { tokenNotExpired } from 'angular2-jwt';
import { functions } from './../../config/functions';


@Injectable()
export class PrjmService {

  constructor(private f : functions) { }


  initiateProject(prod){
    return this.f.post('/projects/newproject', prod, true).map(res => res.json());
  }

  getProjects(){
    return this.f.get('/projects/getprojects', true).map(res => res.json());
  }

  //by owner
  getProject(id){
    return this.f.post('/projects/getproject', id, true).map(res => res.json());
  }

  //by project
  getProjectByID(id){
    return this.f.post('/projects/getprojectByID', id, true).map(res => res.json());
  }


  //milestones

  getMilestones(id){
    return this.f.post('/projects/getMilestones', id, true).map(res => res.json());
  }

  getMilestone(id){
    return this.f.post('/projects/getMilestone', id, true).map(res => res.json());
  }


  addMilestones(data){
    return this.f.post('/projects/addMilestone', data, true).map(res => res.json());
  }

  updateMile(data){
    this.f.post('/projects/updateMile', data, true);
  }

  //Tasks

  getTasks(id){
    return this.f.post('/projects/getTasks', id, true).map(res => res.json());
  }

  addTask(id){
    return this.f.post('/projects/addTask', id, true).map(res => res.json());
  }

  updateTask(update){
    return this.f.post('/projects/updateProgress', update, true).map(res => res.json());
  }

  complyTask(task){
    return this.f.post('/projects/complyTask', task, true, true).map(res => res.json());
  }

  updateSubmission(task){
    return this.f.post('/projects/updateSubmission', task, true).map(res => res.json());
  }

  downloadAttachment(file){
    return this.f.blobpost('/projects/downloadAttachment', file, true).map(res => res.blob());
  }
  
  deleteMile(mile){
    return this.f.post('/projects/deleteMile', mile, true).map(res => res.json());
  }


  addMember(m){
    return this.f.post('/projects/addMember', m, true).map(res => res.json());
  }

  kickMember(m){
    return this.f.post('/projects/kickMember', m, true).map(res => res.json());
  }
  
  //#region Project Team

  getAllMembers(pr){
    return this.f.post('/projects/getAllMembers', pr, true).map(res => res.json());
  }
  
  //#endregion
}

