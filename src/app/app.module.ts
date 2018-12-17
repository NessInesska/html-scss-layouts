import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CenteringElementComponent } from './centering-element';
import { appRoutes } from './app.routes';
import { RouterService } from './services';
import { DefaultPageComponent } from './default-page/default-page.component';


@NgModule({
  declarations: [
    AppComponent,
    CenteringElementComponent,
    DefaultPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  providers: [
    RouterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
