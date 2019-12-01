import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { NotificationService } from 'src/api/api/notification.service';
import { Subscription } from 'rxjs';
import { Notification } from 'src/api/model/notification';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RouterLink } from 'src/api/model/routerLink';
import { LinkParam } from 'src/api/model/linkParam';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit, OnDestroy {

  notificationsSubscription: Subscription;
  notifications: {
    notification: Notification;
    visible: boolean;
  }[];
  constructor(
    private notificationService: NotificationService,
    private router: Router) { }

  ngOnInit() {
    this.notificationsSubscription = this.notificationService.apiNotificationGet().subscribe(
      notify => {
        this.notifications = notify.map(n => ({
          notification: n,
          visible: true
        }));
      });
  }
  ngOnDestroy(): void {
    this.notificationsSubscription.unsubscribe();
  }

  dismiss(event: MouseEvent, n) {
    n.visible = false;
    setTimeout(() => this.notifications.splice(this.notifications.indexOf(n), 1), 330);
    event.stopPropagation();
    this.dismissNotification(n.notification);
  }

  navigate(event: MouseEvent, n) {
    if (n.notification.routerLink) {
      const routeParams = {};
      n.notification.routerLinkParameters.forEach(lp => {
        switch (lp.param) {
          case LinkParam.CommentId:
            return routeParams['commentId'] = lp.value;
          case LinkParam.VideoId:
            return routeParams['vidId'] = lp.value;
        }
      });

      switch (n.notification.routerLink) {
        case RouterLink.Comment:
        case RouterLink.Video:
          this.router.navigate(['video'], { queryParams: routeParams});
          break;
      }
    }
  }

  dismissAll(event: MouseEvent) {
    if (this.notifications.length) {
      this.notifications[0].visible = false;
      this.dismissNotification(this.notifications[0].notification);
      setTimeout(() => {
        this.notifications.splice(0, 1);
        this.dismissAll(event);
      }, 330);
      event.stopPropagation();
    }
  }

  dismissNotification(notification) {
    this.notificationService.apiNotificationDismissNotificationIdPut(notification.id).pipe(
      first()
    ).subscribe();
  }


  notificationClass(n) {
    return 'notification-item ' + (n.visible ? '' : 'hidden');
  }
}


