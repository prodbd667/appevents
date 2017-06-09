import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';

import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {WrapComponent} from './wrap/wrap.component';
import {MainPageComponent} from './main-page/main-page.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {NotfoundPageComponent} from './notfound-page/notfound-page.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule} from '@angular/material';
import {MdSidenavModule} from '@angular/material';
import {MdListModule} from '@angular/material';

import {DinamicComponent} from './dinamic/dinamic.component';
import {InsideComponent} from './inside/inside.component';
import {CalendarComponent} from './calendar/calendar.component';
import { SocketComponent } from './socket/socket.component';

import {SocketService} from './services/socket.service';

const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'socket', component: SocketComponent},
  {path: 'about', component: AboutPageComponent},
  {path: '**', component: NotfoundPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WrapComponent,
    MainPageComponent,
    AboutPageComponent,
    NotfoundPageComponent,
    DinamicComponent,
    InsideComponent,
    CalendarComponent,
    SocketComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FormsModule,
    MdButtonModule,
    MdSidenavModule,
    MdListModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
