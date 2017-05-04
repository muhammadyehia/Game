import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PaginationModule } from 'ng2-bs-pagination';
import { LoginService } from './services/index';
import { LoginComponent, WelcomeComponent, GameListComponent, routing } from './app.routing';
import { GameComponent } from './game/index';
import { CommentComponent } from './comment/index';
import { RateComponent } from './rate/index';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, routing, HttpModule,PaginationModule],
  declarations: [AppComponent, LoginComponent, WelcomeComponent, GameListComponent, GameComponent, CommentComponent, RateComponent],
  bootstrap: [AppComponent],
  providers: [LoginService]
})
export class AppModule { }
