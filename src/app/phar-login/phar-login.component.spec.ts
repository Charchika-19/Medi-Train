import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharLoginComponent } from './phar-login.component';

describe('PharLoginComponent', () => {
  let component: PharLoginComponent;
  let fixture: ComponentFixture<PharLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PharLoginComponent]
    });
    fixture = TestBed.createComponent(PharLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
