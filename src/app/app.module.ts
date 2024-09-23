import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardBookComponent } from './shared/card-book/card-book.component';
import { CardEmptyComponent } from './shared/card-empty/card-empty.component';
import { CardLoadingComponent } from './shared/card-loading/card-loading.component';
import { CardFailureComponent } from './shared/card-failure/card-failure.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CardBookComponent,
    CardEmptyComponent,
    CardLoadingComponent,
    CardFailureComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
