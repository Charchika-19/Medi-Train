import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryBoyLoginComponent } from './delivery-boy-login.component';

describe('DeliveryBoyLoginComponent', () => {
  let component: DeliveryBoyLoginComponent;
  let fixture: ComponentFixture<DeliveryBoyLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryBoyLoginComponent]
    });
    fixture = TestBed.createComponent(DeliveryBoyLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
