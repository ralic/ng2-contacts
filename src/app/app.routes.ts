import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';

// Route config let's you map routes to components
const routes: Routes = [
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
  // map '/' to '/contacts' as our default route
  {
    path: '',
    redirectTo: '/contacts',
    pathMatch: 'full'
  },
];

export const routing = RouterModule.forRoot(routes);
