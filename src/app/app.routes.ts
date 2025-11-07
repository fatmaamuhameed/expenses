import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/components/login/login.component';
import { RecentExpensesComponent } from './features/dashboard/components/recent-expenses/recent-expenses.component';
import { IndexComponent } from './features/dashboard/components/index/index.component';
import { AddExpensesComponent } from './features/expenses/components/add-expenses/add-expenses.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: IndexComponent,
  },
  {
    path: 'add-expenses',
    component: AddExpensesComponent,
  },
];
