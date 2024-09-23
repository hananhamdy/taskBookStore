import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleBookComponent } from './single-book.component';
import { SingleBookRoutingModule } from './single-book-routing.module';
import { CardBookComponent } from '../../shared/card-book/card-book.component';
import { CardFailureComponent } from '../../shared/card-failure/card-failure.component';
import { CardLoadingComponent } from '../../shared/card-loading/card-loading.component';



@NgModule({
  declarations: [SingleBookComponent],
  imports: [
    CommonModule,
    SingleBookRoutingModule,
    CardBookComponent,
    CardLoadingComponent,
    CardFailureComponent
  ]
})
export class SingleBookModule { }
