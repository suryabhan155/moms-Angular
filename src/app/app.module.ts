import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RecordsSharedModule} from '../../projects/records/src/app/app.module';
import {RevenueSharedModule} from '../../projects/revenue/src/app/app.module';
import { NavbarComponent } from './navbar/navbar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppService} from './services/app.service';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './services/auth-interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';

// tslint:disable-next-line:typedef
export function initApp(appService: AppService) {
    return () => appService.initApp();
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopbarComponent,
    FooterComponent,
    RightSidebarComponent,
    NotFoundComponent,
    DashboardComponent
  ],
  imports: [
      HttpClientModule,
      BrowserModule,
      AppRoutingModule,
      RecordsSharedModule.forRoot(),
      RevenueSharedModule.forRoot(),
      BrowserAnimationsModule
  ],
  providers: [
      { provide: LocationStrategy, useClass: HashLocationStrategy },
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
      { provide: APP_INITIALIZER, useFactory: initApp, deps: [AppService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
