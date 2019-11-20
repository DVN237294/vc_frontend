import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { VideoMenuComponent } from './components/video-menu/video-menu.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { MyEnrollmentVideosComponent } from './components/my-enrollment-videos/my-enrollment-videos.component';
import { AuthGuard } from './guards/authguard.guard';
import { AboutComponent } from './components/about/about.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import {CoursesOverviewComponent} from './components/courses-overview/courses-overview.component';
import { from } from 'rxjs';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserInformationComponent } from './components/user-information/user-information.component';
const routes: Routes = [
  { path: '', component: VideoMenuComponent},
  { path: 'video-menu', component: VideoMenuComponent },
  { path: 'myEnrollments', component: MyEnrollmentVideosComponent, canActivate: [AuthGuard] },
  { path: 'video', component: VideoPlayerComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'about', component: AboutComponent },
  { path: 'courses', component: CoursesPageComponent},
  { path: 'coursesOverview', component: CoursesOverviewComponent},
  { path: 'nav-bar', component: NavbarComponent },
  { path: 'user', component: UserInformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
