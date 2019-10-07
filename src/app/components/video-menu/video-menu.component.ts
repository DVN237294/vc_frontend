import { Component, OnInit, Optional, Inject, InjectionToken } from '@angular/core';
import { VideosService } from 'src/service';
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-video-menu',
  templateUrl: './video-menu.component.html',
  styleUrls: ['./video-menu.component.css']
})

export class VideoMenuComponent implements OnInit {

  videos:any[] = []
  
  constructor(private videoApi: VideosService) {
   }

  ngOnInit() {
    this.videoApi.apiVideosGet(environment.FRONTPAGE_VIDEO_LIMIT).subscribe(vids => this.videos = vids);
  }

}
