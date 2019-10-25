import { Component, OnInit, Input } from '@angular/core';
import { CommentsService, Comment } from 'src/api';
import { environment } from '../../../environments/environment'


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

export class CommentsComponent implements OnInit {

  @Input() comments: Comment[] = [];
  
  constructor(private commentsApi: CommentsService) {
   }

  ngOnInit() {
    if(this.comments.length === 0)
      this.commentsApi.apiCommentsIdGet(environment.FRONTPAGE_VIDEO_LIMIT).subscribe(com => this.comments = com);  
  }
}
