import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import{LoginComponent,WelcomeComponent,GameListComponent,GameCommentRateComponent,routing}from './app.routing';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ,FormsModule,routing],
  declarations: [ AppComponent,LoginComponent,WelcomeComponent,GameListComponent,GameCommentRateComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
