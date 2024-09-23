import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./feature-modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./feature-modules/wishlist/wishlist.module').then(m => m.WishlistModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
