import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {UsersService} from '../../services/users.service';
import {Account} from '../../models/account';
import { IsAuthorized } from '../utils/is-authorized.directive';

@Component({
    selector: 'users',
    templateUrl: './users.html',
    providers:[UsersService]
})
export class Users {
    users:Array<Account>;
    router: Router;
    constructor(router: Router,userService:UsersService) {
        this.users = [];
        this.router = router;
        userService.getAll().subscribe((users:Array<Account>) => this.users = users);
    }
    onSelectUser(event:Event,id:string):void {
        event.preventDefault();
        this.router.navigate(['/user',id]);
    }
}
