import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login/login.component';
import { MenuComponent } from './pages/menu/menu/menu.component';

const routes: Routes = [
  // TODO: Change deafult path to login component
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    loadChildren: () =>
      import('./pages/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
  {
    path: 'menu',
    component: MenuComponent,
    loadChildren: () =>
      import('./pages/menu/menu.module').then(
        (m) => m.MenuModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
