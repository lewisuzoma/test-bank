import { Routes } from '@angular/router';
import { LoginComponent } from '@app-pages/login/login.component';
import { TransctionHistoryComponent } from '@app-pages/transction-history/transction-history.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', data: { preload: true }, component: LoginComponent },
    { path: 'transaction-history', data: { preload: true }, component: TransctionHistoryComponent },
    { path: '**', redirectTo: '/login' }
];
