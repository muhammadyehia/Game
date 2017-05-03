import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginService } from './services/index';
import { LoginComponent, WelcomeComponent, GameListComponent, routing } from './app.routing';
import { GameComponent } from './game/index';
import { CommentListComponent } from './comment-list/index';
import { CommentComponent } from './comment/index';
import { RateComponent } from './rate/index';
import { RemoveEmptyCommentPipe } from './pipes/index';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, routing, HttpModule],
  declarations: [AppComponent, LoginComponent, WelcomeComponent, GameListComponent, GameComponent,CommentListComponent,CommentComponent,RateComponent,RemoveEmptyCommentPipe],
  bootstrap: [AppComponent],
  providers: [LoginService]
})
export class AppModule { }
