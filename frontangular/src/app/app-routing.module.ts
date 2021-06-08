import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuardService } from 'src/app/authentication/_guards/guard.service';

const routes: Routes = [
  { path: 'person', loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule) },

  { path: '**', redirectTo: 'person' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
