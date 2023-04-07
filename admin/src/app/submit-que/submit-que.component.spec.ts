import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitQueComponent } from './submit-que.component';

describe('SubmitQueComponent', () => {
  let component: SubmitQueComponent;
  let fixture: ComponentFixture<SubmitQueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitQueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitQueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
