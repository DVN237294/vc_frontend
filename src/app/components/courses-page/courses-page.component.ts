import { Component, OnInit } from '@angular/core';
import {CoursesService, VideosService, Course, EnrollmentsService, Enrollment, Session, Video, User} from 'src/api';
import { environment } from 'src/environments/environment';
import { last } from 'rxjs/operators';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {
  courses: Course[];
  users: User[];
  lastUpdated: any;
  sessions: Session[];
  
  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.apiCoursesGet(environment.FRONTPAGE_VIDEO_LIMIT, true, true, true).subscribe(data => this.courses = data);  
  }
  
  getSessionDates(sessions: Session[]) {
    return sessions.map(function(e) { return e.date; }).sort().reverse()[0]
  }

  getTeacher(sessions: Session[]) {
    return sessions.map(s => s.participants.filter(u=>u.isTeacher).map(function(u) {return u.fullName}));
  }
}


