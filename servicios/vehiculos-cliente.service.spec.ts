import { TestBed } from '@angular/core/testing';

import { VehiculosClienteService } from './vehiculos-cliente.service';

describe('VehiculosClienteService', () => {
  let service: VehiculosClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiculosClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
