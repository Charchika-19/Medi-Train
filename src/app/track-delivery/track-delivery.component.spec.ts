import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackDeliveryComponent } from './track-delivery.component';

describe('TrackDeliveryComponent', () => {
  let component: TrackDeliveryComponent;
  let fixture: ComponentFixture<TrackDeliveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackDeliveryComponent]
    });
    fixture = TestBed.createComponent(TrackDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
