import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import {VideosController2Service} from 'src/api';
import {Video} from 'src/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
public videoForm=new FormControl();
videos: Video[];
videoName: string;

  constructor(private videoService: VideosController2Service, private router: Router) { }

  ngOnInit() {


  this.videoForm.valueChanges.subscribe(
    term => {
      if(term) {
        this.videoService.apiVideosController2NameGet(term).subscribe(
          data => {
            this.videos = data;
            console.log(data);
          }
        )
      }
    }
  );

  this.router.navigate(['/video-menu', {state: this.videos}]);
}
   
}
