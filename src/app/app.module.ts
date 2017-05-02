import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginService } from './services/index';
import { LoginComponent, WelcomeComponent, GameListComponent, routing } from './app.routing';
import { GameComponent } from './game/index';
import { CommentListComponent } from './comment-list/index';
import { CommentComponent } from './comment/index';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, routing, HttpModule],
  declarations: [AppComponent, LoginComponent, WelcomeComponent, GameListComponent, GameComponent,CommentListComponent,CommentComponent],
  bootstrap: [AppComponent],
  providers: [LoginService]
})
export class AppModule { }
