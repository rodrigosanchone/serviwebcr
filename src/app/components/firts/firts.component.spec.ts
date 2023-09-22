import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirtsComponent } from './firts.component';

describe('FirtsComponent', () => {
  let component: FirtsComponent;
  let fixture: ComponentFixture<FirtsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirtsComponent]
    });
    fixture = TestBed.createComponent(FirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
