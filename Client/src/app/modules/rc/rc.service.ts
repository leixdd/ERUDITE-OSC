import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';
import 'rxjs/add/operator/map';

@Injectable()
export class RcService {

  constructor(private socket : Socket) { }

  sendMessage(msg){
    this.socket.emit("message", msg);
  }

  getMessage(){
    return this.socket
            .fromEvent<any>("message")
            .map( data => data.msg);
  }

  sendGroupMessage(room, msg){
    this.socket.emit("sendGroupMessage", room, msg);
  }

  getGroupMessage(){
    return this.socket
            .fromEvent<any>("groupMessage")
            .map( data => data);
  }

  enterRoom(room, user){
    this.socket.emit("enterProject", room, user);
  }

  getRoomEnterRes(){
    return this.socket.fromEvent<any>("enteredCB").map(data => data);
  }

  close(){
    this.socket.disconnect();
  }
}
