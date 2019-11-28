import { Component, OnInit } from '@angular/core';
import { User, UsersService } from 'src/api';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, map, shareReplay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {
  user$: Observable<User>;

  constructor(private route: ActivatedRoute, private userApi: UsersService) { }

  userInHistory(id: number) {
    return (history.state as User).id === id;
  }

  ngOnInit() {
    this.user$ = this.route.queryParams.pipe(
      map(v => +v.userId),
      switchMap(id => this.userInHistory(id) ? of(history.state) : this.userApi.apiUsersIdGet(id)),
      shareReplay());
  }

  getRole(user: User) {
    if (user.isTeacher) {
      return 'Teacher';
    } else {
      return 'Student';
    }
  }
}
