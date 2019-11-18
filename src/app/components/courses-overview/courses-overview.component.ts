import { Component, OnInit } from '@angular/core';
import {CoursesService, VideosService, Course, EnrollmentsService, Enrollment, Session, Video, User} from 'src/api';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-overview',
  templateUrl: './courses-overview.component.html',
  styleUrls: ['./courses-overview.component.css']
})
export class CoursesOverviewComponent implements OnInit {
  course: Course;
  users: User[];
  video: Video[];

  constructor(private courseApi: CoursesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.course = history.state;
  }

  getName() {
    return this.course.name;
  }
  
  getVideos(): Video[] {
    return [].concat.apply([],this.course.sessions.map(s => s.recordings).filter(e => e != null));
    
  }
  getParticipants(): User[] {
    return [].concat.apply([], this.course.sessions.map(s => s.participants.filter(e=>e.id != e.id).map(p=>p.fullName + "(" + p.id + ")")).filter(e=> e!= null));
  }
  }