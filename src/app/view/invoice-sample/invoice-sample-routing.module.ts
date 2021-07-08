import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceSampleComponent } from './invoice-sample.component';

const routes: Routes = [
  {
    path: "",
    component: InvoiceSampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceSampleRoutingModule { }
