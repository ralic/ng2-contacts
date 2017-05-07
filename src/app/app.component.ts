import { Component } from '@angular/core';
import { ContactService } from '../services/contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContactService]
})
export class AppComponent {
  title = 'Ng2-Contacts';
}
