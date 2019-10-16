export * from './authentication.service';
import { AuthenticationService } from './authentication.service';
export * from './videos.service';
import { VideosService } from './videos.service';
export const APIS = [AuthenticationService, VideosService];
