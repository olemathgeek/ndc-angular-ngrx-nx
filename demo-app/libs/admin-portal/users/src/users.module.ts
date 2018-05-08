import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './containers/user-list/user-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  usersReducer,
  initialState as usersInitialState
} from './+state/users.reducer';
import { UsersEffects } from './+state/users.effects';
import { UsersService } from '@demo-app/admin-portal/users/src/services/users.service';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UsersTableToolbarComponent } from './components/users-table-toolbar/users-table-toolbar.component';
import { MaterialModule } from '@demo-app/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: UserListComponent }
    ]),
    StoreModule.forFeature('users', usersReducer, {
      initialState: usersInitialState
    }),
    EffectsModule.forFeature([UsersEffects]),
    MaterialModule,
    RouterModule
  ],
  declarations: [UserListComponent, UsersTableComponent, UsersTableToolbarComponent],
  providers: [UsersEffects, UsersService]
})
export class UsersModule {}
