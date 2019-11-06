import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import {VideosController2Service, AuthenticationService} from 'src/api';
import {Video} from 'src/api';
import {Router} from '@angular/router';
import { VideoMenuComponent } from '../video-menu/video-menu.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
public videoForm=new FormControl();
videos: Video[];
videoName: any;

  constructor(private videoService: VideosController2Service, private user: AuthenticationService, private router: Router) { }

  ngOnInit() {
    
  this.videoForm.valueChanges.subscribe(
    term => {
      if(term) {
        this.videoService.apiVideosController2Get(term).subscribe(
          data => {
            this.videos = data;
            console.log(data);
          }
        )
      }
    }
  )}

  search() {
    this.router.navigateByUrl('/video-menu', {state: this.videoName});
  }
   
}
