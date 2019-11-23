import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Comment, CommentsService, Video, User, UserSignupModel, UsersService } from 'src/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  id:any;
  user: User;
  private _video: Video;

  @Input()
  set video(video: Video) {
    this._video = video;
    this.refresh(); //should try to detect if the refresh is actually needed first.
  };
  get video(): Video {
    return this._video;
  }

  dataSource = new MatTableDataSource<Comment>();
  displayedColumns: string[] = ['user', 'comment', 'commentdate', 'actions'];
  constructor(private commentsService: CommentsService, private router: Router, private usersApi: UsersService) { }

  ngOnInit() {
    //this.commentsService.apiCommentsVideoIdGet(this.video.id).subscribe(data => this.dataSource = new MatTableDataSource<Comment>(data));
  }

  createComment(value: string) {
    if (value) {
      this.commentsService.apiCommentsPost(value, this.video.id).subscribe(
        (value) => {
          this.refresh();
        });
    }
  }

  refresh() {
    this.commentsService.apiCommentsVideoIdGet(this.video.id).subscribe(data => this.dataSource = new MatTableDataSource<Comment>(data));
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

  userItemClick(id) {
    this.router.navigate(['user'], { queryParams: { userId: id }, state: this.usersApi.apiUsersIdGet(id) });
  }
}



