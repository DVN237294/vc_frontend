import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { VideosController2Service } from 'src/api';
import { Video } from 'src/api';
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
  searchContent$: Observable<Video[]>;

  constructor(private videoService: VideosController2Service, private router: Router) { }

  ngOnInit() {
    this.searchContent$ = this.videoForm.valueChanges.pipe(
      filter(searchTerm => searchTerm),
      debounceTime(500),
      switchMap(searchTerm => this.videoService.apiVideosController2Get(searchTerm)));
  }

  searchItemClick(video: Video) {
    this.router.navigate(['video'], { queryParams: { vidId: video.id }, state: video });
  }

}
