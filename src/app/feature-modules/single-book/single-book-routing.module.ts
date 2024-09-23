import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleBookComponent } from './single-book.component';

const routes: Routes = [
  {path: '', component: SingleBookComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleBookRoutingModule { }
