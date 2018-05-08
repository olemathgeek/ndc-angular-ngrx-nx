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

  constructor(
    private actions: Actions,
    private dataPersistence: DataPersistence<UsersState>,
    private usersService: UsersService
  ) {}
}
