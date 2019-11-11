import { Component, OnInit, ElementRef } from '@angular/core';
import { Video, VideosService } from 'src/api';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, map, filter, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  video$: Observable<Video>
  private videoHandlerSubscribed: boolean = false;
  constructor(private videPlayer: ElementRef, private route: ActivatedRoute, private vidApi: VideosService) {
  }

  videoInHistory(id:number)
  {
    return history.state && (history.state as Video).id == id;
  }

  ngOnInit() {
    this.video$ = this.route.queryParams.pipe(
      map(v => +v['vidId']),
      filter(id => id > 0),
      switchMap(id => this.videoInHistory(id) ? of(history.state) : this.vidApi.apiVideosIdGet(id)),
      shareReplay());
  }

  videoDOMReady()
  {
    if(!this.videoHandlerSubscribed)
      this.video$.subscribe(vid => this.loadVideo(vid)) && (this.videoHandlerSubscribed = true);
  }

  loadVideo(video: Video) {
    const player = this.videPlayer.nativeElement.querySelector('video');
    const source = this.videPlayer.nativeElement.querySelector('source');
    if (player && source) {
      player.pause();
      source.setAttribute('src', environment.API_BASE_PATH + video.streamUrl);
      source.setAttribute('type', video.properties ? video.properties.mimeType : 'video/mp4');
      player.load();
    }
  }
}




