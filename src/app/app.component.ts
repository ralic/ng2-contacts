import { Component } from '@angular/core';
import { ContactService } from '../services/contacts.service';
import { GroupService } from '../services/groups.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContactService, GroupService]
})
  
export class AppComponent {
  title = 'Ng2-Contacts';
}
