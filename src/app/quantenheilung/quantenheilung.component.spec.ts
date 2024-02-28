import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantenheilungComponent } from './quantenheilung.component';

describe('QuantenheilungComponent', () => {
  let component: QuantenheilungComponent;
  let fixture: ComponentFixture<QuantenheilungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuantenheilungComponent]
    });
    fixture = TestBed.createComponent(QuantenheilungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
