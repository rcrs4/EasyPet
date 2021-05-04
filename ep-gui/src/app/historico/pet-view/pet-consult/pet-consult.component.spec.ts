import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetConsultComponent } from './pet-consult.component';

describe('PetConsultComponent', () => {
  let component: PetConsultComponent;
  let fixture: ComponentFixture<PetConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetConsultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
