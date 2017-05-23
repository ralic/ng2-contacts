import { Component } from '@angular/core';
import { ContactService } from '../services/contacts.service';
import { GroupService } from '../services/groups.service';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContactService, GroupService]
})

export class AppComponent {

//  authenticated: boolean;
  loginService: LoginService;
  constructor(router: Router, loginService: LoginService) {
    const self = this;
    this.loginService = loginService;
//    this.authenticated = loginService.isAuthenticated();

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
