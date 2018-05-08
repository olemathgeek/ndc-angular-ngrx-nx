import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState, getUser } from '@demo-app/auth';
import { User } from '@demo-app/data-models';
import { Observable
 } from 'rxjs/Observable';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  componentActive = true;
  user: User;
  user$: Observable<User>;
  constructor(private store: Store<AuthState>) { }

  ngOnInit() {
    this.user$ = this.store.select(getUser);
  }

}
