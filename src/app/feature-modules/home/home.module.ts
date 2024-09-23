import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardBookComponent } from '../../shared/card-book/card-book.component';
import { CardFailureComponent } from '../../shared/card-failure/card-failure.component';
import { CardLoadingComponent } from '../../shared/card-loading/card-loading.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardBookComponent,
    CardLoadingComponent,
    CardFailureComponent
  ]
})
export class HomeModule { }
