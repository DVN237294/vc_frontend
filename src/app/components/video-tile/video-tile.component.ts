import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/service';

@Component({
  selector: 'app-video-tile',
  templateUrl: './video-tile.component.html',
  styleUrls: ['./video-tile.component.css']
})
export class VideoTileComponent implements OnInit {

  @Input() video: Video;
  thumbnailUrl:string = "assets\\video.jpeg";
  videoSubject:string = "DNP";
  videoName:string = "Lols";
  videoDate:Date = new Date(2019, 3, 23);
  constructor() { }

  ngOnInit() {
  }

  cardClicked()
  {
    //clicked, to go video page
    console.log("clicked card");
  }
}
