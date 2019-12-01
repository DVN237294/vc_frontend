import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material';
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
import { Router } from '@angular/router';
import { AuthInterceptor } from './http-interceptor';
import { LoginService } from './services/login.service';
import { MyEnrollmentVideosComponent } from './components/my-enrollment-videos/my-enrollment-videos.component';
import { FromNowPipe } from './pipes/from-now.pipe';

import { MatTableModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { AboutComponent } from './components/about/about.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { CoursesOverviewComponent } from './components/courses-overview/courses-overview.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { UserInformationComponent } from './components/user-information/user-information.component';
import { NotificationsComponent } from './components/navbar/notifications/notifications.component';

export function apiConfigFactory(): Configuration {
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
    MyEnrollmentVideosComponent,
    AboutComponent,
    FromNowPipe,
    AboutComponent,
    CommentsComponent,
    CoursesPageComponent,
    CoursesOverviewComponent,
    UserInformationComponent,
    NotificationsComponent,
  ],
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    BrowserModule,
    AppRoutingModule,
    ApiModule.forRoot(apiConfigFactory),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true
    }),
    ClickOutsideModule
  ],
  providers: [
    {
      provide: BASE_PATH,
      useValue: environment.API_BASE_PATH
    },
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: function (router: Router, loginService: LoginService) {
        return new AuthInterceptor(router, loginService);
      },
      multi: true,
      deps: [Router, LoginService]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }