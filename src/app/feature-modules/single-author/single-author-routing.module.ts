import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleAuthorComponent } from './single-author.component';

const routes: Routes = [{ path: '', component: SingleAuthorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleAuthorRoutingModule { }
