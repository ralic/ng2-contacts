import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { URLSearchParams } from '@angular/http';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contacts.service';
import { BaseHttpService } from '../../services/base-http';
import * as constants from '../common/constants';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService, BaseHttpService]
})
export class ContactComponent {
  form: FormGroup;

  id: number;
  firstName: string;
  lastName: string;
  title: string;
  company: string;
  imageURL: string;
  skype: string;
  twitter: string;

  selectedGroupId: string = null;

  contact: Contact = new Contact(
  '',
  );
  
  //  contactGroups: Array<ContactGroup> = [];
  //  remainingGroups: Array<Group> = [];

  //  constructor (private contactService: ContactService, private groupService: GroupService, private contactGroupService: ContactGroupService, private router:Router, private params: RouteParams, private formBuilder: FormBuilder, private httpService: BaseHttpService) {
  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder, private httpService: BaseHttpService) {

    route.params.subscribe(params => {this.id = params['id']; });

    if (this.id) {
      const self = this;
      const contactGroupParams = new URLSearchParams();
//      contactGroupParams.set('filter', 'contact_id=' + id);
      let passedId = Number(this.id); 
      contactService
        .get(passedId)
        .subscribe((contact) => self.contact = contact);
      /*
            contactGroupService
              .query(contactGroupParams, false, true)
              .subscribe((contactGroups) => {
                self.contactGroups = contactGroups;
                self.getRemainingGroups();
              });
      */
    }

    this.form = this.formBuilder.group({
      'firstName': ['', Validators.required],
      'lastName':  ['', Validators.required],
      'title':  [''],
      'company': [''],
      'imageURL': [''],
      'skype': [''],
      'twitter': ['']
    });
  }

  back() {
//    this.router.navigate(['/ContactList']);
    this.router.navigate(['/contacts']);
  };
  /*
    getRemainingGroups () {
      var self = this;
      this.groupService
        .query()
        .subscribe((groups) => {
          self.remainingGroups = groups.filter((item) => {
            return !self.contactGroups.some((a) => {
              return a.group.id == item.id;
            });
          });
        })
    }
  
    addSelectedGroup() {
      if (!this.selectedGroupId) return;
  
      var self = this;
      var group = this.remainingGroups.filter((item) => {
        return item.id == self.selectedGroupId;
      })[0];
  
      this.contactGroupService.addGroup(group.id, this.contact.id)
        .subscribe((response) => {
          var newContactGroup = new ContactGroup(response.id);
          newContactGroup.group = group;
  
          self.remainingGroups = self.remainingGroups.filter((item) => {
            return item.id !== group.id;
          });
  
          self.contactGroups.push(newContactGroup);
          self.selectedGroupId = null;
        });
    };
  
    removeGroup (contactGroup: ContactGroup) {
      var self = this;
      this.contactGroupService
        .remove(contactGroup.id)
        .subscribe((item) => {
          self.contactGroups = self.contactGroups.filter((item) => {
            return item.id !== contactGroup.id;
          });
  
          self.remainingGroups.push(contactGroup.group);
        });
    }
  */
  save() {
    var self = this;
    var isNew = !this.contact.id;

    this.contactService.save(this.contact)
      .subscribe((response) => {
        if (isNew)
          alert('New contact created');
        else
          alert('Contact updated');

        self.back();
      })

  }
}
