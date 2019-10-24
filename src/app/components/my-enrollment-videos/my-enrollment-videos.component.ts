import { Component, OnInit } from '@angular/core';
import { EnrollmentsService, Enrollment, Session, Video } from 'src/api';
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-my-enrollment-videos',
  templateUrl: './my-enrollment-videos.component.html',
  styleUrls: ['./my-enrollment-videos.component.css']
})
export class MyEnrollmentVideosComponent implements OnInit {

  enrollments: any[] = [];

  constructor(private enrollApi: EnrollmentsService) { }

  ngOnInit() {
    this.enrollApi.apiEnrollmentsMyEnrollmentsGet(environment.FRONTPAGE_VIDEO_LIMIT, true, false, true)
      .subscribe(
        result => {
          this.enrollments = result;
        },
        error => {
          console.log("error: ");
          console.log(error);
        }
      );
  }

  flattenSessionVideos(sessions: Session[]):Video[] {
    return [].concat.apply([], sessions.map(s => s.recordings).filter(e => e != null));
  }
}