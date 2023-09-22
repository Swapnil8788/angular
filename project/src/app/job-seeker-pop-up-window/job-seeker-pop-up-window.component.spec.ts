import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSeekerPopUpWindowComponent } from './job-seeker-pop-up-window.component';

describe('JobSeekerPopUpWindowComponent', () => {
  let component: JobSeekerPopUpWindowComponent;
  let fixture: ComponentFixture<JobSeekerPopUpWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobSeekerPopUpWindowComponent]
    });
    fixture = TestBed.createComponent(JobSeekerPopUpWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
