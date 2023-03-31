import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersQueBankComponent } from './teachers-que-bank.component';

describe('TeachersQueBankComponent', () => {
  let component: TeachersQueBankComponent;
  let fixture: ComponentFixture<TeachersQueBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachersQueBankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachersQueBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
