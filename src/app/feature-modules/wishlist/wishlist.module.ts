import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './wishlist.component';
import { WishlistRoutingModule } from './wishlist-routing.module';
import { CardEmptyComponent } from '../../shared/card-empty/card-empty.component';



@NgModule({
  declarations: [WishlistComponent],
  imports: [
    CommonModule,
    WishlistRoutingModule,
    CardEmptyComponent
  ]
})
export class WishlistModule { }
