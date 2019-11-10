import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { VideoMenuComponent } from './components/video-menu/video-menu.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { MyEnrollmentVideosComponent } from './components/my-enrollment-videos/my-enrollment-videos.component';
import { AuthGuard } from './guards/authguard.guard';
import { FrontpageGuard } from './guards/frontpage.guard';
import { AboutComponent } from './components/about/about.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { from } from 'rxjs';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  { path: '', component: VideoMenuComponent, canActivate: [FrontpageGuard] },
  { path: 'video-menu', component: VideoMenuComponent },
  { path: 'myEnrollments', component: MyEnrollmentVideosComponent, canActivate: [AuthGuard] },
  { path: 'video', component: VideoPlayerComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'about', component: AboutComponent },
  { path: 'comments', component: CommentsComponent},
  { path: 'courses', component: CoursesPageComponent},
  { path: 'comments', component: CommentsComponent },
  { path: 'nav-bar', component: NavbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
