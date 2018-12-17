import { Routes } from '@angular/router';

import { CenteringElementComponent } from './centering-element';
import { DefaultPageComponent } from './default-page';

export const appRoutes: Routes = [
  {path: 'default', component: DefaultPageComponent},
  {path: 'center', component: CenteringElementComponent},
  {path: '**', redirectTo: '/default'},
];