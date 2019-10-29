import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Comment, CommentsService, Video } from 'src/api';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {   
  video: Video;
  
  constructor(private commentsService: CommentsService) {
  }

  ngOnInit() {
    this.video = history.state;
  }
  
  }


 

