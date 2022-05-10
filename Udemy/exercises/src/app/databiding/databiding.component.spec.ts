import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabidingComponent } from './databiding.component';

describe('DatabidingComponent', () => {
  let component: DatabidingComponent;
  let fixture: ComponentFixture<DatabidingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabidingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
