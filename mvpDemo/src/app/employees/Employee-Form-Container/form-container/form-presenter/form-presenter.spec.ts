import { TestBed } from '@angular/core/testing';

import { FormPresenterService } from './form-presenter';

describe('FormPresenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormPresenterService = TestBed.get(FormPresenterService);
    expect(service).toBeTruthy();
  });
});
