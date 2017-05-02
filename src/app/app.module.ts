import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginService } from './services/index';
import { LoginComponent, WelcomeComponent, GameListComponent, GameComponent, routing } from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, routing, HttpModule],
  declarations: [AppComponent, LoginComponent, WelcomeComponent, GameListComponent, GameComponent],
  bootstrap: [AppComponent],
  providers: [LoginService]
})
export class AppModule { }
