import { Component } from '@angular/core';
import { ContactService } from '../services/contacts.service';
import { GroupService } from '../services/groups.service';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { Event } from '@angular/router';
import { AccountEventsService } from '../services/account.events.service';
import { HmacHttpClient } from './utils/hmac-http-client';
import { IsAuthorized } from '../app/utils/is-authorized.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContactService, GroupService, AccountEventsService, LoginService, HmacHttpClient]
})

export class AppComponent {
  loginService: LoginService;
  constructor(router: Router, loginService: LoginService) {
    const self = this;
    this.loginService = loginService;

    router.events.subscribe(function(e: any) {

      if (e.url === '/logout') {
        if (loginService.isAuthenticated()) {
          self.logout();
        }
      }
      if ((e.url !== '/authenticate') && (e.url !== '/home') && (e.url !== '/about')){
        if (!loginService.isAuthenticated()) {
          router.navigate(['/authenticate']);
        } else {
          loginService.sendLoginSuccess();
        }
      }
    });
  }

  logout(): void {
    this.loginService.logout();
  }
/*
  isAuthenticated() {
    return this.authenticated;
  }
 */
}
