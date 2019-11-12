import { Component, OnInit } from '@angular/core';
import {CoursesService, VideosService, Course, EnrollmentsService, Enrollment, Session, Video} from 'src/api';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-courses-overview',
  templateUrl: './courses-overview.component.html',
  styleUrls: ['./courses-overview.component.css']
})
export class CoursesOverviewComponent implements OnInit {
  course: Course;
  videos: Video[];

  constructor() { 
  }

  ngOnInit() {
    this.course = history.state;
  }
  
  getVideos(sessions: Session[]) {
    return sessions.map(s => s.recordings).filter(e => e != null);
    
  }
  getParticipants(sessions: Session[]) {
    return sessions.map(s => s.participants);
  }
  }