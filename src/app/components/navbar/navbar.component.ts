import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Video, SearchService, SearchResult, Course, User } from 'src/api';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, filter, debounceTime, share } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public videoForm = new FormControl();
  searchContent$: Observable<SearchResult>;

  constructor(private search:SearchService, private router: Router) { }

  ngOnInit() {
    this.searchContent$ = this.videoForm.valueChanges.pipe(
      filter(searchTerm => searchTerm),
      debounceTime(500),
      switchMap(searchTerm => this.search.apiSearchGet(searchTerm)));

      this.searchContent$.subscribe(e => console.log(e));
  }

  videoItemClick(video: Video) {
    this.router.navigate(['video'], { queryParams: { vidId: video.id }, state: video });
  }
  
  courseItemClick(course: Course) {
  }

  userItemClick(user: User) {
  }

}
