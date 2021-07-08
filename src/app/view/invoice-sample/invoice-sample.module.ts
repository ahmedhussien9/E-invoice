import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceSampleRoutingModule } from './invoice-sample-routing.module';
import { InvoiceSampleComponent } from './invoice-sample.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    InvoiceSampleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InvoiceSampleRoutingModule
  ]
})
export class InvoiceSampleModule { }
