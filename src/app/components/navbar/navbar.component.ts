import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Video, SearchService, SearchResult, Course, User, CoursesService } from 'src/api';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, filter, debounceTime } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  resultsShown = false;
  public videoForm = new FormControl();
  searchContent$: Observable<SearchResult>;
  courses: Course[];

  constructor(private search:SearchService, private coursesService: CoursesService, private router: Router) { }

  ngOnInit() {
    this.searchContent$ = this.videoForm.valueChanges.pipe(
      filter(searchTerm => searchTerm),
      debounceTime(500),
      switchMap(searchTerm => this.search.apiSearchGet(searchTerm)));

      this.coursesService.apiCoursesGet(environment.FRONTPAGE_VIDEO_LIMIT, false, false, false).subscribe(data => this.courses = data);
  }

  inputHighlight(event)
  {
    if(event.target && event.target.value && event.target.setSelectionRange)
      event.target.setSelectionRange(0, event.target.value.length);
  }

  videoItemClick(video: Video) {
    this.router.navigate(['video'], { queryParams: { vidId: video.id }, state: video });
    this.resultsShown = false;
  }
  
  courseItemClick(course: Course) {
    this.resultsShown = false;
  }

  userItemClick(user: User) {
    this.resultsShown = false;
  }

}
