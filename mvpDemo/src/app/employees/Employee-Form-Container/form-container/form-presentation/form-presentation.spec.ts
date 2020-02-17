import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPresentation } from './form-presentation';

describe('FormPresentation', () => {
  let component: FormPresentation;
  let fixture: ComponentFixture<FormPresentation>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPresentation ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPresentation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
