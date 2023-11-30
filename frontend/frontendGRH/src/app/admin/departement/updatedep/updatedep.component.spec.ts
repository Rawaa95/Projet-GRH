import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedepComponent } from './updatedep.component';

describe('UpdatedepComponent', () => {
  let component: UpdatedepComponent;
  let fixture: ComponentFixture<UpdatedepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatedepComponent]
    });
    fixture = TestBed.createComponent(UpdatedepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
