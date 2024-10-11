/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SideNavService } from './SideNav.service';

describe('Service: SideNav', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SideNavService]
    });
  });

  it('should ...', inject([SideNavService], (service: SideNavService) => {
    expect(service).toBeTruthy();
  }));
});
