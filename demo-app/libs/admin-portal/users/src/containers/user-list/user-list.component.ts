import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '@demo-app/data-models';
import { UsersState } from '../../+state/users.reducer';
import { selectAllUsers } from '../../+state';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users$: Store<User[]>;

  constructor(private router: Router, private store: Store<UsersState>) {}

  ngOnInit() {
    this.users$ = this.store.select(selectAllUsers);
  }

  updateUrlFilters(country: string): void {
    const navigationExtras: NavigationExtras = {
      replaceUrl: true,
      queryParams: {country}
    };
    this.router.navigate([`/users`], navigationExtras);
  }
}
