import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupComponent } from './group/group.component';
import { LoginComponent } from './login/login.component';
import { Users } from './users/users';
import { User } from './users/user';

// Route config let's you map routes to components
const routes: Routes = [
  { path: 'authenticate', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
  { path: 'users', component: Users, },
  { path: 'user/:id', component: User, },
  { path: '', component: AboutComponent },

  // map '/home' to the home component
  {
    path: 'home',
    component: HomeComponent,
  },
  // map '/about' to the about component
  {
    path: 'about',
    component: AboutComponent,
  },
  // map '/contacts' to the contact list component
  {
    path: 'contacts',
    component: ContactListComponent,
  },
  // map '/contact' to new contact details component
  {
    path: 'contact',
    component: ContactComponent
  },
  // map '/contact/:id' to contact details component
  {
    path: 'contact/:id',
    component: ContactComponent
  },
  // map '/contacts' to the contact list component
  {
    path: 'groups',
    component: GroupListComponent,
  },
  // map '/group/:id' to group details component
  {
    path: 'group/:id',
    component: GroupComponent
  },
  // map '/group' to group details component
  {
    path: 'group',
    component: GroupComponent
  }
  /* ,
  // map '/' to '/contacts' as our default route
  {
    path: '',
    redirectTo: '/contacts',
    pathMatch: 'full'
  },*/
];

export const routing = RouterModule.forRoot(routes);
