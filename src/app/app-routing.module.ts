import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { VideoMenuComponent } from './components/video-menu/video-menu.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { MyEnrollmentVideosComponent } from './components/my-enrollment-videos/my-enrollment-videos.component';
import { AuthGuard } from './guards/authguard.guard';
import { FrontpageGuard } from './guards/frontpage.guard';

const routes: Routes = [
  { path: '', component: VideoMenuComponent, canActivate: [FrontpageGuard] },
  { path: 'myEnrollments', component: MyEnrollmentVideosComponent, canActivate: [AuthGuard]},
  { path: 'video-player', component: VideoPlayerComponent },
  { path: 'register', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
