import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideoMenuComponent } from './components/video-menu/video-menu.component';

//API
import { ApiModule } from '../service/api.module'
import { HttpClientModule } from '@angular/common/http'
import { BASE_PATH } from '../service';
import { environment } from '../environments/environment';
import { VideoTileComponent } from './components/video-tile/video-tile.component';
import { Group4Pipe } from './pipes/group4.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VideoMenuComponent,
    VideoTileComponent,
    Group4Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    HttpClientModule
  ],
  providers: [ {provide: BASE_PATH, useValue: environment.API_BASE_PATH } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
