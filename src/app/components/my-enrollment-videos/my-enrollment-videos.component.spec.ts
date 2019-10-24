import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEnrollmentVideosComponent } from './my-enrollment-videos.component';

describe('MyEnrollmentVideosComponent', () => {
  let component: MyEnrollmentVideosComponent;
  let fixture: ComponentFixture<MyEnrollmentVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyEnrollmentVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEnrollmentVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
