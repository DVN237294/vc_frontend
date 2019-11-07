import { Component, OnInit, Input } from '@angular/core';
import { Video, VideosService } from 'src/api';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-video-menu',
  templateUrl: './video-menu.component.html',
  styleUrls: ['./video-menu.component.css']
})

export class VideoMenuComponent implements OnInit {

  @Input() videos: Video[] = [];

  constructor(private videoApi: VideosService) {
  }

  ngOnInit() {
    if (this.videos.length === 0)
      this.videoApi.apiVideosGet(environment.FRONTPAGE_VIDEO_LIMIT).subscribe(vids => this.videos = vids);
  }

}



