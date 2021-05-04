import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetConsultDetailComponent } from './pet-consult-detail.component';

describe('PetConsultDetailComponent', () => {
  let component: PetConsultDetailComponent;
  let fixture: ComponentFixture<PetConsultDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetConsultDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetConsultDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
