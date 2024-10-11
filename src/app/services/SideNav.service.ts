import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  private sidenavOpen = new BehaviorSubject<boolean>(false);
  sidenavOpen$ = this.sidenavOpen.asObservable();

  toggleSidenav() {
    this.sidenavOpen.next(!this.sidenavOpen.value);
  }

  closeSidenav() {
    this.sidenavOpen.next(false);
  }
}
