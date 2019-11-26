import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Comment, CommentsService, Video, User, UserSignupModel, UsersService } from 'src/api';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  private _video: Video;

  @Input()
  set video(video: Video) {
    this._video = video;
    this.refresh(); // should try to detect if the refresh is actually needed first.
  }
  get video(): Video {
    return this._video;
  }

  dataSource = new MatTableDataSource<Comment>();
  displayedColumns: string[] = ['user', 'comment', 'commentdate', 'actions'];
  constructor(
    private commentsService: CommentsService,
    private router: Router,
    private login: LoginService,
    private toast: ToastrService) { }

  ngOnInit() {
  }

  createComment(value: string) {
    if (value) {
      this.commentsService.apiCommentsPost(value, this.video.id).subscribe({
        next: () => this.refresh(),
        error: err => {
          if (!this.login.isLoggedIn()) {
            this.toast.error('You need to be logged in to comment');
          }
        }
      });
    }
  }

  refresh() {
    this.commentsService.apiCommentsVideoIdGet(this.video.id).subscribe(data => this.dataSource = new MatTableDataSource<Comment>(data));
  }

  onDelete(row: Comment) {
    if (confirm('Are you sure you want to delete this comment?')) {
      this.commentsService.apiCommentsIdDelete(row.id).subscribe({
        next: () => this.refresh(),
        error: () => {
          if (!this.login.isLoggedIn()) {
            this.toast.error('You don\'t have permission for deleting that.');
          }
        }
      });
    }
  }

  userItemClick(user: User) {
    if (user) {
    this.router.navigate(['user'], { queryParams: { userId: user.id }, state: user });
    }
  }
}



