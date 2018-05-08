import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '@demo-app/data-models';
import { UsersState } from './../../+state/users.reducer';
import * as usersActions from './../../+state/users.actions'
import { selectAllUsers } from './../../+state/index'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users$: Store<User[]>;

  constructor(private store: Store<UsersState>) {}

  ngOnInit() {
    this.store.  dispatch(new usersActions.LoadUsersAction());
    this.users$ = this.store.select(selectAllUsers);
  }
}
