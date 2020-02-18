import { TestBed } from '@angular/core/testing';

import { FormPresenter } from './form-presenter';

describe('FormPresenter', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormPresenter = TestBed.get(FormPresenter);
    expect(service).toBeTruthy();
  });
});
