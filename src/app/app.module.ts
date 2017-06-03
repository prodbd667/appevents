import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {WrapComponent} from './wrap/wrap.component';
import {MainPageComponent} from './main-page/main-page.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {NotfoundPageComponent} from './notfound-page/notfound-page.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule} from '@angular/material';

const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: '**', component: NotfoundPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WrapComponent,
    MainPageComponent,
    AboutPageComponent,
    NotfoundPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MdButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
