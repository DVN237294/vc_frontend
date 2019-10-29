import { Component, OnInit } from '@angular/core';
import { Video } from 'src/api';
import { CommentsService, Comment, VideosService } from 'src/api';
import { AuthenticationService, User } from 'src/api';
import { environment } from '../../../environments/environment'
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import {MatIconModule} from '@angular/material';
import {MatFormFieldControl} from '@angular/material';
import { JsonPipe } from '@angular/common';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {   
comments: Comment[] = new Array(); 
  video: Video;
  dataSource = new MatTableDataSource<Comment>();
  displayedColumns: string[] = ['user','comment','commentdate', 'actions'];
  
  constructor(private commentsService: CommentsService) {
  }

  ngOnInit() {
    this.video = history.state;
    this.commentsService.apiCommentsIdGet(this.video.id).subscribe(data=>this.dataSource= new MatTableDataSource<Comment>(data));  
  }
  
  createComment(value:string) {
    if(value) {
    this.commentsService.apiCommentsPost(value, this.video.id).subscribe(
      (value)=>{
        console.log("POST call successful", value)
      this.refresh();
      },
      response =>{
        console.log("POST call in error", response);
      });
  }
}

  refresh() {
    this.video = history.state;
    this.commentsService.apiCommentsIdGet(this.video.id).subscribe(data=>this.dataSource= new MatTableDataSource<Comment>(data));  
  }

  onDelete(row: Comment) {
    if (confirm("Are you sure you want to delete this comment?")) {
      this.commentsService.apiCommentsIdDelete(row.id).subscribe(
        (val) => {
          console.log("POST call succesfull", val)
          this.refresh();
        }
      )
    }
  }
}

 

