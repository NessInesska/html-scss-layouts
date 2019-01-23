import { Routes } from '@angular/router';

import {
  FlexboxComponent,
  MarginCollapseComponent,
  BoxSizingModelComponent,
  CenteringElementComponent,
  DefaultPageComponent,
  ThreeColumnsFloatComponent,
  UniversalAttributesComponent,
  Html5NewTagsComponent,
} from './pages';

export const appRoutes: Routes = [
  { path: 'default', component: DefaultPageComponent },
  { path: 'three-float', component: ThreeColumnsFloatComponent },
  { path: 'center', component: CenteringElementComponent },
  { path: 'box-sizing-model', component: BoxSizingModelComponent },
  { path: 'margins-collapse', component: MarginCollapseComponent },
  { path: 'flexbox', component: FlexboxComponent },
  { path: 'attributes', component: UniversalAttributesComponent },
  { path: 'html5-attrs', component: Html5NewTagsComponent },
  { path: '**', redirectTo: '/default' },
];
