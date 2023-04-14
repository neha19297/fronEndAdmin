import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCamComponent } from './video-cam.component';

describe('VideoCamComponent', () => {
  let component: VideoCamComponent;
  let fixture: ComponentFixture<VideoCamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoCamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoCamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
