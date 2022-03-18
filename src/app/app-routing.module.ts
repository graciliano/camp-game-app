import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu/menu.component';

const routes: Routes = [
  // TODO: Change deafult path to login component
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
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
