import { Component } from '@angular/core';


@Component({
  selector: 'game-app',
  template: ` 
  <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand' [routerLink]="['/welcome']">{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                      <li><a [routerLink]="['/login']">Login</a></li>
                    <li><a [routerLink]="['/games']">Game List</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `
})
export class AppComponent {
  pageTitle: string = 'Green Tube Games';
}


