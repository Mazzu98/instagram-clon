/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PublicacionesService } from './publicaciones.service';

describe('Service: Publicaciones', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublicacionesService]
    });
  });

  it('should ...', inject([PublicacionesService], (service: PublicacionesService) => {
    expect(service).toBeTruthy();
  }));
});
