import { MatButtonModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CenteringElementComponent } from './pages/centering-element';
import { appRoutes } from './app.routes';
import { RouterService } from './services';
import { DefaultPageComponent } from './pages/default-page';
import { ThreeColumnsFloatComponent } from './pages/three-columns-float';
import { BoxSizingModelComponent } from './pages/box-sizing-model';
import { MarginCollapseComponent } from './pages/margin-collapse/margin-collapse.component';

@NgModule({
  declarations: [
    AppComponent,
    CenteringElementComponent,
    DefaultPageComponent,
    ThreeColumnsFloatComponent,
    BoxSizingModelComponent,
    MarginCollapseComponent,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
