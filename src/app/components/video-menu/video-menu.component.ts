import { Component, OnInit } from '@angular/core';
import { Video } from 'src/service';

@Component({
  selector: 'app-video-menu',
  templateUrl: './video-menu.component.html',
  styleUrls: ['./video-menu.component.css']
})
export class VideoMenuComponent implements OnInit {

  videos:Video[]
  constructor() { }

  ngOnInit() {
    this.videos = [
      {
        id: 1,
        url: "testing",
        duration: 333,
        name: "fdf1"
      },
      {
        id: 2,
        url: "testing2",
        duration: 333,
        name: "fdf2"
      },
      
      {
        id: 3,
        url: "testing3",
        duration: 333,
        name: "fdf3"
      }
    ];
  }

}
