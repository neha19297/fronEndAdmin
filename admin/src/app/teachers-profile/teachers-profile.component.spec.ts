import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersProfileComponent } from './teachers-profile.component';

describe('TeachersProfileComponent', () => {
  let component: TeachersProfileComponent;
  let fixture: ComponentFixture<TeachersProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachersProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachersProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
