import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import {VideosController2Service, AuthenticationService} from 'src/api';
import {Video} from 'src/api';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
public videoForm=new FormControl();
videos: Video[];
videoName: string;

  constructor(private videoService: VideosController2Service, private userService: AuthenticationService) { }

  ngOnInit() {
  

  this.videoForm.valueChanges.subscribe(
    term => {
      if(term) {
        this.videoService.apiVideosGet(term).subscribe(
          data => {
            this.videos = data;
            console.log(data);
          }
        )
      }
    }
  )

  }
}