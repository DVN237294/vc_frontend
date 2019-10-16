import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { VideoMenuComponent } from './components/video-menu/video-menu.component';

const routes: Routes = [
  { path: '', component: VideoMenuComponent},
  { path: 'video-player', component: VideoPlayerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
