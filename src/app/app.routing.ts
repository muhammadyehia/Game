import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/index';
import { WelcomeComponent } from './welcome/index';
import { GameListComponent } from './game-list/index';
import { GameCommentRateComponent } from './game-comment-rate/index';
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
    },
    {
        path: 'detail',
        component: GameCommentRateComponent
    },
    {
        path: '', redirectTo: '/welcome', pathMatch: 'full'
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
export{ LoginComponent,WelcomeComponent,GameListComponent,GameCommentRateComponent}
