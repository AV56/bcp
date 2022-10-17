import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { LoginComponent } from '@ado-bcp-ui/login';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const appRoutes: Route[] = [
  {
    path: 'ado-vault.notification',
    loadChildren: () =>
      import('ado-vault.notification/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'ado-vault.storage',
    loadChildren: () =>
      import('ado-vault.storage/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'ado-vault.role',
    loadChildren: () =>
      import('ado-vault.role/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'ado-vault.restore',
    loadChildren: () =>
      import('ado-vault.restore/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'ado-vault.report',
    loadChildren: () =>
      import('ado-vault.report/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'ado-vault.user-management',
    loadChildren: () =>
      import('ado-vault.user-management/Module').then(
        (m) => m.RemoteEntryModule
      ),
  },
  {
    path: 'ado-vault.integration',
    loadChildren: () =>
      import('ado-vault.integration/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'ado-vault.entity',
    loadChildren: () =>
      import('ado-vault.entity/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'ado-vault.company',
    loadChildren: () =>
      import('ado-vault.company/Module').then((m) => m.RemoteEntryModule),
  },
  // {
  //   path: '',
  //   component: NxWelcomeComponent,
  // },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'ado-vault.dashboard',
    component: DashboardComponent,
  },
  {
    path: 'ado-vault.backup',
    loadChildren: () =>
      import('ado-vault.backup/Module').then((m) => m.RemoteEntryModule),
  },
];
