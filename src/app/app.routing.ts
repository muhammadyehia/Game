import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/index';
import { WelcomeComponent } from './welcome/index';
import { GameListComponent } from './game-list/index';
import { ErrorComponent } from './error/index';
import { PageNotFoundComponent } from './page-not-found/index';
const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        path: 'games',
        component: GameListComponent
    }
    ,
    {
        path: 'error',
        component: ErrorComponent
    },
    {
        path: '', redirectTo: '/welcome', pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
export{ LoginComponent,WelcomeComponent,GameListComponent,ErrorComponent,PageNotFoundComponent}
