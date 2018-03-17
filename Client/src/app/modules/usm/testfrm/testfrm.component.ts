import { Component, OnInit } from '@angular/core';
import { UsmService } from '../usm.service';
import { Router } from '@angular/router';

import swal from 'sweetalert2';

declare var $:any;

@Component({
  selector: 'app-testfrm',
  templateUrl: './testfrm.component.html',
  styleUrls: ['./testfrm.component.css']
})
export class TestfrmComponent implements OnInit {

  file : File
  constructor(private usm : UsmService, private router : Router) { }

  ngOnInit() {

    swal({
      title: "Yehey!",
      text: "You were successfully registered",
      type: "success",
      showCancelButton: true,
      showLoaderOnConfirm: true,
      
    });
    

  }

  testUpload(){
    console.log(this.file);
    var frmData : FormData = new FormData();

    frmData.append('profile', this.file, this.file.name);
    this.usm.upload(frmData).subscribe(res => {
      console.log(res);
    }, err => {
      alert(err);
    });
  }

  fileChange($event : Event){
    this.file = $event.target['files'][0];
  }

}
