import { Component, OnInit, ElementRef } from '@angular/core';
import { Video, VideosService } from 'src/api';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, of, concat } from 'rxjs';
import { mergeAll, map, filter, distinctUntilChanged, share } from 'rxjs/operators';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  video$: Observable<Video>
  constructor(private videPlayer: ElementRef, private route: ActivatedRoute, private vidApi: VideosService) {
  }

  ngOnInit() {
    let historyVidStream$ = of(history.state).pipe(filter<Video>(state => state && (history.state as Video).id !== undefined));
    let apiVidStream = this.route.queryParams.pipe(map<Params, number>(v => +v['vidId']), filter(id => id > 0), distinctUntilChanged(), map(id => this.vidApi.apiVideosIdGet(id)), mergeAll());
    
    //I can't for the life of me get apiVidStream to only emit when historyVidStream doesn't emit, so
    //it'll have to be like this..
    this.video$ = concat(historyVidStream$, apiVidStream).pipe(share());

    this.video$.subscribe(e => {
      const player = this.videPlayer.nativeElement.querySelector('video');
      if (player) player.load();
    })
  }

  getVideoUrl(video:Video) {
    return environment.API_BASE_PATH + video.streamUrl
  }
}




