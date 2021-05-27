/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SugeridosService } from './sugeridos.service';

describe('Service: Sugested', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SugeridosService]
    });
  });

  it('should ...', inject([SugeridosService], (service: SugeridosService) => {
    expect(service).toBeTruthy();
  }));
});
