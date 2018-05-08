import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { of } from 'rxjs/observable/of'
;
import 'rxjs/add/operator/switchMap';
import * as usersActions from './users.actions';
import { UsersService } from './../services/users.service';
import { map } from 'rxjs/operators';
import { User } from '@demo-app/data-models';
import { UsersState } from './../../src/+state/users.reducer';
import { ActivatedRouteSnapshot } from '@angular/router';
import { UserListComponent } from './../../../users/src/containers/user-list/user-list.component';

@Injectable()
export class UsersEffects {
  @Effect()
  loadData = this.dataPersistence.fetch(
    usersActions.UsersActionTypes.LoadUsers,
    {
      run: (action: usersActions.LoadUsersAction, state: UsersState) => {
        return this.usersService
          .getUsers()
          .pipe(
            map(
              (users: User[]) => new usersActions.LoadUsersSuccessAction(users)
            )
          );
      },

      onError: (action: usersActions.LoadUsersAction, error) =>
        new usersActions.LoadUsersFailAction(error)
    }
  );

  @Effect()
  loadUsersFromRoute = this.dataPersistence.navigation(UserListComponent, {
    run: (a: ActivatedRouteSnapshot, state: UsersState) => {
      return this.usersService
        .getUsers(a.queryParams['country'])
        .pipe(
          map((users: User[]) => new usersActions.LoadUsersSuccessAction(users))
        );
    },
    onError: (a: ActivatedRouteSnapshot, e: any) => {
      return new usersActions.LoadUsersFailAction(e);
    }
  });

  constructor(
    private actions: Actions,
    private dataPersistence: DataPersistence<UsersState>,
    private usersService: UsersService
  ) {}
}
