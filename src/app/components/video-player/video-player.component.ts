import { Component, OnInit } from '@angular/core';
import { Video } from 'src/api';


@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
     video:Video;
     constructor() {
          
     }

     ngOnInit() {
          this.video = history.state;
     }
 
}
