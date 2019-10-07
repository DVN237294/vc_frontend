import { Component, OnInit } from '@angular/core';
import { Video, VideosService } from 'src/service';

@Component({
  selector: 'app-video-menu',
  templateUrl: './video-menu.component.html',
  styleUrls: ['./video-menu.component.css']
})
export class VideoMenuComponent implements OnInit {

  videos:any[]
  constructor() { }

  ngOnInit() {
    //temp. data:
    this.videos = [];
    for(let i = 0; i < 20; i++)
    {
      this.videos.push({
        id: i,
        url: "testing",
        duration: 333+i,
        name: "fdf1",
        thumbnailUrl: "assets\\video.jpeg",
        subject: "DNP",
        date: new Date(2019, 3, 1+i)
      })
    }
  }

}
