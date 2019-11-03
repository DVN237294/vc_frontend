import { Component, OnInit, Input } from '@angular/core';
import { VideosService, Video } from 'src/api';
import { environment } from '../../../environments/environment'
import { VideosController2Service } from 'src/api';

@Component({
  selector: 'app-video-menu',
  templateUrl: './video-menu.component.html',
  styleUrls: ['./video-menu.component.css']
})

export class VideoMenuComponent implements OnInit {

  @Input() videos: Video[] = [];
  videoName: string; 

  constructor(private videoApi: VideosController2Service) {
   }

  ngOnInit() {
    this.videoApi.apiVideosController2Get(this.videoName).subscribe(
    name => { this.videos = name; this.videoName = history.state});
        
        } 

  }

 

