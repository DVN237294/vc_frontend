import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-tile',
  templateUrl: './video-tile.component.html',
  styleUrls: ['./video-tile.component.css']
})
export class VideoTileComponent implements OnInit {

  @Input() video: Video;
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  cardClicked() {
    this.router.navigate(['video'], { queryParams: { vidId: this.video.id }, state: this.video });
  }
}

