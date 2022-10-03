import { TestBed } from '@angular/core/testing';

import { AxiosApiService } from './axios-api.service';

describe('AxiosApiService', () => {
  let service: AxiosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AxiosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
