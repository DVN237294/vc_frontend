export * from './authentication.service';
import { AuthenticationService } from './authentication.service';
export * from './courses.service';
import { CoursesService } from './courses.service';
export * from './enrollments.service';
import { EnrollmentsService } from './enrollments.service';
export * from './videos.service';
import { VideosService } from './videos.service';
export const APIS = [AuthenticationService, CoursesService, EnrollmentsService, VideosService];
