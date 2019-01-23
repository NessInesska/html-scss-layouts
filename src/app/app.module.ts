import { MatButtonModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { RouterService } from './services';
import {
  BoxSizingModelComponent,
  CenteringElementComponent,
  DefaultPageComponent,
  ThreeColumnsFloatComponent,
  MarginCollapseComponent,
  FlexboxComponent,
} from './pages';

@NgModule({
  declarations: [
    AppComponent,
    CenteringElementComponent,
    DefaultPageComponent,
    ThreeColumnsFloatComponent,
    BoxSizingModelComponent,
    MarginCollapseComponent,
    FlexboxComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    MatButtonModule,
  ],
  providers: [
    RouterService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
