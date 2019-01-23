import { Routes } from '@angular/router';
import {FlexboxComponent} from './pages/flexbox/flexbox.component';
import {MarginCollapseComponent} from './pages/margin-collapse/margin-collapse.component';

import { BoxSizingModelComponent } from './pages/box-sizing-model';
import { CenteringElementComponent } from './pages/centering-element';
import { DefaultPageComponent } from './pages/default-page';
import { ThreeColumnsFloatComponent } from './pages/three-columns-float';

export const appRoutes: Routes = [
  {path: 'default', component: DefaultPageComponent},
  {path: 'three-float', component: ThreeColumnsFloatComponent},
  {path: 'center', component: CenteringElementComponent},
  {path: 'box-sizing-model', component: BoxSizingModelComponent},
  {path: 'margins-collapse', component: MarginCollapseComponent},
  {path: 'flexbox', component: FlexboxComponent},
  {path: '**', redirectTo: '/default'},
];
