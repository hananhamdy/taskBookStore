import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleAuthorRoutingModule } from './single-author-routing.module';
import { SingleAuthorComponent } from './single-author.component';
import { CardBookComponent } from '../../shared/card-book/card-book.component';
import { CardFailureComponent } from '../../shared/card-failure/card-failure.component';
import { CardLoadingComponent } from '../../shared/card-loading/card-loading.component';


@NgModule({
  declarations: [
    SingleAuthorComponent
  ],
  imports: [
    CommonModule,
    SingleAuthorRoutingModule,
    CardBookComponent,
    CardLoadingComponent,
    CardFailureComponent
  ]
})
export class SingleAuthorModule { }
