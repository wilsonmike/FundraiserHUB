import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCleanComponent } from './nav-clean.component';

describe('NavCleanComponent', () => {
  let component: NavCleanComponent;
  let fixture: ComponentFixture<NavCleanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavCleanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
