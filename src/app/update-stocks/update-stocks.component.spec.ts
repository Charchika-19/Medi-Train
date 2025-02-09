import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStocksComponent } from './update-stocks.component';

describe('UpdateStocksComponent', () => {
  let component: UpdateStocksComponent;
  let fixture: ComponentFixture<UpdateStocksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateStocksComponent]
    });
    fixture = TestBed.createComponent(UpdateStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
