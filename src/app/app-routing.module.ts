import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { VideoMenuComponent } from './components/video-menu/video-menu.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';

const routes: Routes = [
  { path: '', component: VideoMenuComponent},
  { path: 'video-player', component: VideoPlayerComponent },
];

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
