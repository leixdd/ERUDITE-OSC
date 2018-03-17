import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing/app-routing.module';
import { ModulesModule } from './modules/modules.module';
import { functions } from './config/functions';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModulesModule
    
  ],
  providers: [functions],
  bootstrap: [AppComponent]
})
export class AppModule { }
