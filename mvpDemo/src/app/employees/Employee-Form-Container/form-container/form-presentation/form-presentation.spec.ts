import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPresentationComponent } from './form-presentation';

describe('FormPresentationComponent', () => {
  let component: FormPresentationComponent;
  let fixture: ComponentFixture<FormPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
