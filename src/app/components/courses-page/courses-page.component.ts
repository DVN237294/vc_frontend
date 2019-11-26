import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course, CoursesService, Session } from 'src/api';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {
  courses: Course[];
  
  constructor(private coursesService: CoursesService, private router: Router) { }

  ngOnInit() {
    this.coursesService.apiCoursesGet(15, true, true, true).subscribe(data => this.courses = data);  
  }
  
  getSessionDates(sessions: Session[]) {
    return sessions.map(function(e) { return e.date; }).sort().reverse()[0]
  }

  getTeacher(sessions: Session[]) {
    return sessions.map(s => s.participants.filter(u=>u.isTeacher).map(t=>t.fullName));
  }

  courseItemClick(course: Course) {
    this.router.navigate(['coursesOverview'], { queryParams: { courseId: course.id }, state: course });
  }
}


