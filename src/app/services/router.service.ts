import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  public goToCeneringPage(): Promise<boolean> {
    return this.router.navigate(['/center']);
  }

  public goToTheeColumnsFloatPage(): Promise<boolean> {
    return this.router.navigate(['/three-float']);
  }
}
