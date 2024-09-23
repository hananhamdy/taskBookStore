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
    path: 'search',
    loadChildren: () => import('./feature-modules/search/search.module').then(m => m.SearchModule)
  },
  {
    path: 'works/:id',
    loadChildren: () => import('./feature-modules/single-book/single-book.module').then(m => m.SingleBookModule)
  },
  {
    path: 'authors/:id',
    loadChildren: () => import('./feature-modules/single-author/single-author.module').then(m => m.SingleAuthorModule)
  },
  {
    path: '**',
    loadChildren: () => import('./feature-modules/not-found/not-found.module').then(m => m.NotFoundModule)
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
