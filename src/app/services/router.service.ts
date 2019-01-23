import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) {
  }

  public goToDefaultPage(): Promise<boolean>{
    return this.router.navigate(['/default']);
  }

  public goToCeneringPage(): Promise<boolean> {
    return this.router.navigate([ '/center' ]);
  }

  public goToTheeColumnsFloatPage(): Promise<boolean> {
    return this.router.navigate([ '/three-float' ]);
  }

  public goToBoxSizingModelPage(): Promise<boolean> {
    return this.router.navigate([ '/box-sizing-model' ]);
  }

  public goToMarginCollapsePage(): Promise<boolean> {
    return this.router.navigate([ '/margins-collapse' ]);
  }

  public goToFlexboxPage(): Promise<boolean> {
    return this.router.navigate([ '/flexbox' ]);
  }

  public goToUniversalAttributesPage(): Promise<boolean> {
    return this.router.navigate([ '/attributes' ]);
  }

  public goToHTML5AttributesPage(): Promise<boolean> {
    return this.router.navigate(['/html5-attrs']);
  }
}
