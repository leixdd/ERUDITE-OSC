import { Component, OnInit } from '@angular/core';
import { RcService } from '../../rc.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {

  inMessage: any;
  messages : any = [];
  constructor(private rc : RcService) { }

  ngOnInit() {
    this.rc.getMessage().subscribe(data => {
      this.messages.push(data);
      console.log(data);
    })
  }

  sendMessage(){
    this.rc.sendMessage(this.inMessage);
  }

}
