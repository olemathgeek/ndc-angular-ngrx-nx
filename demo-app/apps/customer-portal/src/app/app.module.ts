import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { authRoutes, AuthModule, AuthGuard } from '@demo-app/auth';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LayoutModule } from '@demo-app/customer-portal/layout';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', redirectTo: 'user-profile' },
        {path: 'auth', children: authRoutes},
        {
          path: 'user-profile',
          loadChildren: '@demo-app/user-profile#UserProfileModule',
          canActivate: [ AuthGuard ]
        }
      ],
      {
        initialNavigation: 'enabled'
      }
    ),
    // StoreModule.forRoot(
    //   {},
    //   { metaReducers: !environment.production ? [storeFreeze] : [] }
    // ),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule,
    AuthModule,
    LayoutModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
