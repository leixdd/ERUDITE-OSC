import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsmModule } from './usm/usm.module';
import { RcModule } from './rc/rc.module';
import { PrjmModule } from './prjm/prjm.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  imports: [
    CommonModule,
    UsmModule,
    RcModule,
    PrjmModule,
    AdminModule
  ],
  declarations: []
})
export class ModulesModule { }
