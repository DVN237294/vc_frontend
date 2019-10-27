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

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {   
comments: Comment[] = new Array(); 
  video: Video;
  dataSource = new MatTableDataSource<Comment>();
  displayedColumns: string[] = ['user','comment','commentdate'];
  
  constructor(private commentsService: CommentsService) {
  }

  createComment(value) {
    if(value)
    this.commentsService.apiCommentsPost(this.video.id).subscribe(
      (val) =>{
        console.log("POST call succesfull", val)
      this.refresh();
      },
      response =>{
        console.log("POST call in error", response);
      });
    }

   ngOnInit() {
    this.video = history.state;
    this.commentsService.apiCommentsIdGet(this.video.id).subscribe(data=>this.dataSource= new MatTableDataSource<Comment>(data));  
    this.video = history.state;
  }
  

  refresh() {
    this.commentsService.apiCommentsIdGet(this.video.id).subscribe(data=>this.dataSource= new MatTableDataSource<Comment>(data));  
  }

  onDelete(row: Comment) {
    if (confirm("Are you sure you want to delete this comment?")) {
      this.commentsService.apiCommentsIdDelete(row.id).subscribe(
        (val) => {
          this.refresh();
        }
      )
    }
  }
}

 

