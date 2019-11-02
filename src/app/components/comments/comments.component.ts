import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Comment, CommentsService, Video } from 'src/api';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {   
  comments: Comment[] = new Array(); 
    video: Video;
    dataSource = new MatTableDataSource<Comment>();
    displayedColumns: string[] = ['user','comment','commentdate', 'actions'];
  constructor(private commentsService: CommentsService) { }

  ngOnInit() {
    this.video = history.state;
    this.commentsService.apiCommentsVideoIdGet(this.video.id).subscribe(data=>this.dataSource= new MatTableDataSource<Comment>(data));  
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
    this.commentsService.apiCommentsVideoIdGet(this.video.id).subscribe(data=>this.dataSource= new MatTableDataSource<Comment>(data));  
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

 

