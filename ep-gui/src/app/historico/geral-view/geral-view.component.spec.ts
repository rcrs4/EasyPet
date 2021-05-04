import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeralViewComponent } from './geral-view.component';

describe('GeralViewComponent', () => {
  let component: GeralViewComponent;
  let fixture: ComponentFixture<GeralViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeralViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeralViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
