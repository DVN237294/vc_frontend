import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {VideosService, EnrollmentsService} from 'src/api';
import { Video } from 'src/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public search:any = '';
  filter: any[] = [];
  videosService: VideosService;
  videos: Video[];


  constructor() { }

  ngOnInit() {
    this.search.valueChanges.subscribe(
      term => {
        if(term) {
          this.videosService.apiVideosGet(term).subscribe(
            data => {
            this.videos = data;
        });
        }
      }
    );

    
  }
}