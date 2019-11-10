import { Component, OnInit } from '@angular/core';
import {CoursesService, VideosService, Course, EnrollmentsService, Enrollment, Session, Video} from 'src/api';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-courses-overview',
  templateUrl: './courses-overview.component.html',
  styleUrls: ['./courses-overview.component.css']
})
export class CoursesOverviewComponent implements OnInit {
  courses: Course[];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.apiCoursesGet(environment.FRONTPAGE_VIDEO_LIMIT, true, true, true).subscribe(data => this.courses = data);
  }
  
  flattenSessionVideos(sessions: Session[]):Video[] {
    return [].concat.apply([], sessions.map(s => s.recordings).filter(e => e != null));
  }

}