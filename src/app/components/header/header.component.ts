import { Component } from '@angular/core';
import { RouterService } from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent {

  constructor(private router: RouterService) {
  }

  public goToDefaultPage(): void {
    return this.router.goToDefaultPage();
  }
}
