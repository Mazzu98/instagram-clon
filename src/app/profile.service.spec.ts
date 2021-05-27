/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PorfileService } from './profile.service';

describe('Service: Porfile', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PorfileService]
    });
  });

  it('should ...', inject([PorfileService], (service: PorfileService) => {
    expect(service).toBeTruthy();
  }));
});
