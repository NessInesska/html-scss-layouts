import { Component } from '@angular/core';

import { RouterService } from '../../services';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent {

  constructor(private routerService: RouterService) { }

  public goToCenteringPage(): void {
    this.routerService.goToCeneringPage();
  }

  public goToTheeColumnsFloatPage(): void {
    this.routerService.goToTheeColumnsFloatPage();
  }

  public goToBoxSizingModelPage(): void {
    this.routerService.goToBoxSizingModelPage();
  }

  public goToMarginCollapsePage(): void {
    this.routerService.goToMarginCollapsePage();
  }

  public goToFlexboxPage(): void {
    this.routerService.goToFlexboxPage();
  }

  public goToUniversalAttributesPage(): void {
    this.routerService.goToUniversalAttributesPage();
  }
}
