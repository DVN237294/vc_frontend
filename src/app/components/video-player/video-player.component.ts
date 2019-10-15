import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';


@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  video;
 
     constructor(private router:Router, private activatedRoute:ActivatedRoute) {
          console.log(this.router.getCurrentNavigation().extras.state);
     }
 
     ngOnInit() {
          //console.log(history.state);
          this.video=history.state;
     }
 
}
