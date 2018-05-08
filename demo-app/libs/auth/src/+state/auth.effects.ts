import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as authActions from './auth.actions';
import { AuthState } from './auth.reducer';
import { DataPersistence } from '@nrwl/nx';
import { AuthActionTypes } from './auth.actions';
import { AuthService } from '@demo-app/auth/src/services/auth/auth.service';
import { map, tap, mergeMap, catchError } from 'rxjs/operators';
import { User } from '@demo-app/data-models';
import { Router } from '@angular/router';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AuthEffects {

  // @Effect()
  // loadAuth$ = this.dataPersistence.fetch(AuthActionTypes.Login, {
  //   run: (action: authActions.LoginAction) => {
  //     return this.authService.login(action.payload).pipe(map((user: User) => (new authActions.LoginSuccessAction(user))))
  //   },

  //   onError: (action: authActions.LoginAction, error) => {
  //     return new authActions.LoginFailAction(error);
  //   }
  // });

  @Effect()
  login = this.actions$
    .ofType(AuthActionTypes.Login)
    .pipe(
      mergeMap((action: authActions.LoginAction) =>
        this.authService
          .login(action.payload)
          .pipe(
            map((user: User) => new authActions.LoginSuccessAction(user)),
            catchError(error => of(new authActions.LoginFailAction(error)))
          )
      )
    );


  @Effect({dispatch: false})
  navigateToProfile$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    map((action: authActions.LoginSuccessAction) => action.payload),
    tap((user: User) => this.router.navigate([`/user-profile/${user.id}`]))
  )

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<AuthState>,
    private authService: AuthService,
    private router: Router
  ) {}
}
