import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideoMenuComponent } from './components/video-menu/video-menu.component';

//API
import { ApiModule, Configuration, ConfigurationParameters } from '../api/';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BASE_PATH } from '../api';
import { environment } from '../environments/environment';

import { VideoTileComponent } from './components/video-tile/video-tile.component';
import { Group4Pipe } from './pipes/group4.pipe';
import { LoginWindowComponent } from './components/navbar/login-window/login-window.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
<<<<<<< HEAD
import { CommentsComponent } from './components/comments/comments.component';
=======
import { Router } from '@angular/router';
import { AuthInterceptor } from './http-interceptor';
import { LoginService } from './services/login.service';
import { MyEnrollmentVideosComponent } from './components/my-enrollment-videos/my-enrollment-videos.component';
>>>>>>> 5440095c5f389fc05958fc130d4823942dfe8dfa

export function apiConfigFactory (): Configuration {
  const params: ConfigurationParameters = {
    withCredentials: false,
    accessToken: () => localStorage.getItem('token')
  }
  return new Configuration(params);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VideoMenuComponent,
    VideoTileComponent,
    Group4Pipe,
    VideoPlayerComponent,
    LoginWindowComponent,
    RegistrationComponent,
<<<<<<< HEAD
    CommentsComponent
=======
    MyEnrollmentVideosComponent
>>>>>>> 5440095c5f389fc05958fc130d4823942dfe8dfa
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule.forRoot(apiConfigFactory),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true
    })
  ],
  providers: [ 
    {
      provide: BASE_PATH,
      useValue: environment.API_BASE_PATH 
    },
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: function(router: Router, loginService:LoginService) {
        return new AuthInterceptor(router, loginService);
      },
      multi: true,
      deps: [Router, LoginService]
   },
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }


