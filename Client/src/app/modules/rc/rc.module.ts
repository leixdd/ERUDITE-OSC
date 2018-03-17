import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { APP_CONFIG } from './../../config/config';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


import { SocketIoModule, SocketIoConfig } from 'ng-socket-io'; 

const config: SocketIoConfig = { url:  APP_CONFIG.Protocol + "://" + APP_CONFIG.Address + '/', options: {}};


import { RcService } from './rc.service';

import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpModule,
    SocketIoModule.forRoot(config)
  ],
  declarations: [ChatComponent],
  providers: [ RcService ]
})
export class RcModule { }
