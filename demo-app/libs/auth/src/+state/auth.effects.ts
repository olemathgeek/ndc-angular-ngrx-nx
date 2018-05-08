import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as authActions from './auth.actions';
import { AuthState } from './auth.reducer';
import { DataPersistence } from '@nrwl/nx';
import { AuthActionTypes } from './auth.actions';
import { AuthService } from '@demo-app/auth/src/services/auth/auth.service';
import { map } from 'rxjs/operators';
import { User } from '@demo-app/data-models';

@Injectable()
export class AuthEffects {

  @Effect()
  loadAuth$ = this.dataPersistence.fetch(AuthActionTypes.Login, {
    run: (action: authActions.LoginAction) => {
      return this.authService.login(action.payload)
      .pipe(map((user: User) => (new authActions.LoginSuccessAction(user))))
    },

    onError: (action: authActions.LoginAction, error) => {
      return new authActions.LoginFailAction(error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<AuthState>,
    private authService: AuthService
  ) {}
}
