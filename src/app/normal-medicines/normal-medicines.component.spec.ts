import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalMedicinesComponent } from './normal-medicines.component';

describe('NormalMedicinesComponent', () => {
  let component: NormalMedicinesComponent;
  let fixture: ComponentFixture<NormalMedicinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormalMedicinesComponent]
    });
    fixture = TestBed.createComponent(NormalMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
