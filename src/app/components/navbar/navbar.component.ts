import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Video, SearchService, SearchResult, Course, User, CoursesService } from 'src/api';
import { Router } from '@angular/router';
import { Observable, fromEvent } from 'rxjs';
import { switchMap, filter, debounceTime, take } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public searchForm = new FormControl();
  resultsShown = false;
  searchContent$: Observable<SearchResult>;
  courses$: Observable<Course[]>;

  constructor(
    private search: SearchService,
    private coursesService: CoursesService,
    private router: Router,
    public login: LoginService) { }

  @ViewChild('coursesDropdown', { static: false })
  set coursesDropdown(value: ElementRef) {
    if (!this.courses$) {
      this.courses$ = fromEvent(value.nativeElement, 'click').pipe(
        switchMap(() => this.coursesService.apiCoursesGet(15, true, true, true)),
        take(1));
    }
  }

  ngOnInit() {
    this.searchContent$ = this.searchForm.valueChanges.pipe(
      filter(searchTerm => searchTerm),
      debounceTime(500),
      switchMap(searchTerm => this.search.apiSearchGet(searchTerm)));
  }

  inputHighlight(event) {
    if (event.target && event.target.value && event.target.setSelectionRange) {
      event.target.setSelectionRange(0, event.target.value.length);
    }
  }

  videoItemClick(video: Video) {
    this.router.navigate(['video'], { queryParams: { vidId: video.id }, state: video });
    this.resultsShown = false;
  }

  courseItemClick(course: Course) {
    this.router.navigate(['coursesOverview'], { queryParams: { courseId: course.id }, state: course });
    this.resultsShown = false;
  }

  userItemClick(user: User) {
    this.router.navigate(['user'], { queryParams: { userId: user.id }, state: user });
    this.resultsShown = false;
  }

}
