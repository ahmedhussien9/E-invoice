import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlayoutComponent } from './core/userlayout/userlayout.component';

const routes: Routes = [
  {
    path: '',
    component: UserlayoutComponent,
    children: [
      {
        path: 'invoice',
        loadChildren: () =>
          import(
            './view/invoice/invoice.module'
          ).then((m) => m.InvoiceModule),
      },
      {
        path: 'invoice-upload-samples',
        loadChildren: () =>
          import(
            './view/invoice-sample/invoice-sample.module'
          ).then((m) => m.InvoiceSampleModule),
      },
      {
        path: '',
        redirectTo: 'invoice',
        pathMatch: 'prefix',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
