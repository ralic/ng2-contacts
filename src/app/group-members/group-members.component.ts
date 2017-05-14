import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import * as Rx from 'rxjs/Rx';
import { webServiceEndpoint, defaultItemsCountPerPage } from '../common/constants';
import { PaginationPage, PaginationPropertySort } from '../common/pagination';
import { tableDirectives, Table } from '../table/table';
import { showLoading, hideLoading } from '../common/loader';
import { URLSearchParams } from '@angular/http';
import { GroupMember } from '../../models/group-member';
import { GroupService } from '../../services/groups.service';
import { BaseHttpService } from '../../services/base-http';

@Component({
  selector: 'app-group-members',
  templateUrl: './group-members.component.html',
  styleUrls: ['./group-members.component.css'],
  providers: [GroupService, BaseHttpService]

})
export class GroupMembersComponent implements Table {
  public members: GroupMember[] = [];

  memberPage: any;
  self: GroupMembersComponent;
  pageNumber: number;
  groupId: string;

  constructor(private groupService: GroupService, @Inject(Router) private router: Router, private route: ActivatedRoute) {
    this.groupId = route.snapshot.params['id'];
  }

  ngOnInit() {
    const observable: Rx.Observable<PaginationPage<any>> = this.fetchPage(0, defaultItemsCountPerPage, null);
    showLoading();
    observable.subscribe(() => {
    }, hideLoading, hideLoading);
    this.self = this;

  }

  fetchPage(pageNumber: number, pageSize: number, sort: PaginationPropertySort): Rx.Observable<PaginationPage<any>> {
    this.pageNumber = pageNumber;
    const observable: Rx.Observable<PaginationPage<any>> = this.groupService.findGroupMembers(this.groupId, pageNumber, pageSize, sort);
    observable.subscribe(memberPage => this.memberPage = memberPage);
    return observable;
  }

  show(contact) {
    this.router.navigate(['/contact', contact.contactId]);
  }
  
  delete(member) {
    const observable: Rx.Observable<string> = this.groupService.removeGroupMember(member.id);
    showLoading();
    observable.switchMap(() => {
      return this.fetchPage(this.pageNumber, defaultItemsCountPerPage, null);
    }).subscribe(r => {
      this.fetchPage(this.pageNumber, defaultItemsCountPerPage, null);
    }, hideLoading, hideLoading);
  }
}
