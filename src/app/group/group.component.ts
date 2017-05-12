import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { URLSearchParams } from '@angular/http';
import { Group } from '../../models/group';
import { GroupService } from '../../services/groups.service';
import { BaseHttpService } from '../../services/base-http';
import * as constants from '../common/constants';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
  providers: [GroupService, BaseHttpService]
})
export class GroupComponent {
  form: FormGroup;

  id: number;
  groupName: string;
  groupDescription: string;

  selectedGroupId: string = null;

  group: Group = new Group(
  '',
  );
  
  //  groupGroups: Array<GroupGroup> = [];
  //  remainingGroups: Array<Group> = [];

  //  constructor (private groupService: GroupService, private groupService: GroupService, private groupGroupService: GroupGroupService, private router:Router, private params: RouteParams, private formBuilder: FormBuilder, private httpService: BaseHttpService) {
  constructor(private groupService: GroupService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder, private httpService: BaseHttpService) {

    route.params.subscribe(params => {this.id = params['id']; });

    if (this.id) {
      const self = this;
      const groupGroupParams = new URLSearchParams();
//      groupGroupParams.set('filter', 'group_id=' + id);
      let passedId = Number(this.id); 
      groupService
        .get(passedId)
        .subscribe((group) => self.group = group);
      /*
            groupGroupService
              .query(groupGroupParams, false, true)
              .subscribe((groupGroups) => {
                self.groupGroups = groupGroups;
                self.getRemainingGroups();
              });
      */
    }

    this.form = this.formBuilder.group({
      'groupName': ['', Validators.required],
      'groupDescription':  ['', Validators.required]
    });
  }

  back() {
//    this.router.navigate(['/GroupList']);
    this.router.navigate(['/groups']);
  };
  /*
    getRemainingGroups () {
      var self = this;
      this.groupService
        .query()
        .subscribe((groups) => {
          self.remainingGroups = groups.filter((item) => {
            return !self.groupGroups.some((a) => {
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
  
      this.groupGroupService.addGroup(group.id, this.group.id)
        .subscribe((response) => {
          var newGroupGroup = new GroupGroup(response.id);
          newGroupGroup.group = group;
  
          self.remainingGroups = self.remainingGroups.filter((item) => {
            return item.id !== group.id;
          });
  
          self.groupGroups.push(newGroupGroup);
          self.selectedGroupId = null;
        });
    };
  
    removeGroup (groupGroup: GroupGroup) {
      var self = this;
      this.groupGroupService
        .remove(groupGroup.id)
        .subscribe((item) => {
          self.groupGroups = self.groupGroups.filter((item) => {
            return item.id !== groupGroup.id;
          });
  
          self.remainingGroups.push(groupGroup.group);
        });
    }
  */
  save() {
    var self = this;
    var isNew = !this.group.groupId;

    this.groupService.save(this.group)
      .subscribe((response) => {
        if (isNew)
          alert('New group created');
        else
          alert('Group updated');

        self.back();
      })

  }
}
