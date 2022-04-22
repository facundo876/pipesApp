import { NgModule } from '@angular/core';

//Prime NG
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

@NgModule({
  declarations: [],
  exports:[
    ButtonModule,
    CardModule,
    MenubarModule
  ],
  imports: []
})
export class PrimeNgModule { }
