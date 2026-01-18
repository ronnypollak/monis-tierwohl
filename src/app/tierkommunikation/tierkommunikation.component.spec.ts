import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierkommunikationComponent } from './tierkommunikation.component';

describe('TierkommunikationComponent', () => {
  let component: TierkommunikationComponent;
  let fixture: ComponentFixture<TierkommunikationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TierkommunikationComponent]
    });
    fixture = TestBed.createComponent(TierkommunikationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
