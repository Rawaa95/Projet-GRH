import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutdepComponent } from './ajoutdep.component';

describe('AjoutdepComponent', () => {
  let component: AjoutdepComponent;
  let fixture: ComponentFixture<AjoutdepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutdepComponent]
    });
    fixture = TestBed.createComponent(AjoutdepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
