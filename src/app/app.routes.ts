import { Routes } from '@angular/router';

import { CenteringElementComponent } from './pages/centering-element';
import { DefaultPageComponent } from './pages/default-page';
import { ThreeColumnsFloatComponent } from './pages/three-columns-float';

export const appRoutes: Routes = [
  {path: 'default', component: DefaultPageComponent},
  {path: 'three-float', component: ThreeColumnsFloatComponent},
  {path: 'center', component: CenteringElementComponent},
  {path: '**', redirectTo: '/default'},
];