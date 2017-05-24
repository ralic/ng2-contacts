import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, XHRBackend, RequestOptions, HttpModule } from '@angular/http';
import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { TablePagination } from './table/table';
import { TableElementsCount } from './table/table';
import { TableSort } from './table/table';
import { HmacHttpClient } from './utils/hmac-http-client';
import { ContactComponent } from './contact/contact.component';
import { GroupComponent } from './group/group.component';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupMembersComponent } from './group-members/group-members.component';
import { GroupMemberSelectorComponent } from './group-member-selector/group-member-selector.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from '../services/login.service';
import { AccountEventsService } from '../services/account.events.service';
import { Users } from './users/users';
import { User } from './users/user';
import * as AppUtils from '../app/utils/app.utils';
//import { IsAuthorized } from '../app/utils/is-authorized.directive';
import { UtilsModule } from '../app/utils/utils.module';

@NgModule({

  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactListComponent,
    TableElementsCount,
    TablePagination,
    TableSort,
    ContactComponent,
    GroupComponent,
    GroupListComponent,
    GroupMembersComponent,
    GroupMemberSelectorComponent,
    AccountComponent,
    LoginComponent,
    Users,
    User
    // ,
    // IsAuthorized
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    UtilsModule
  ],
/*
  providers: [AccountEventsService, LoginService, HmacHttpClient,
    {
      provide: Http,

      useFactory: (xhrBackend: XHRBackend, requestOptions: RequestOptions, accountEventService: AccountEventsService) => {

        return myHttpClient(xhrBackend, requestOptions, accountEventService);
      },

      deps: [XHRBackend, RequestOptions, AccountEventsService],
      multi: false
    }
  ],
*/
  bootstrap: [AppComponent]
})

export class AppModule { }

export function myHttpClient(xhrBackend: XHRBackend, requestOptions: RequestOptions, accountEventService: AccountEventsService) {
  return new HmacHttpClient(xhrBackend, requestOptions, accountEventService);
};
