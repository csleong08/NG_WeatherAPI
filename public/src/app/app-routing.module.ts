import { CityComponent } from './city/city.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: ':city', component: CityComponent },
  // { path: '', pathMatch: 'full', redirectTo: '/city' },
  // { path: '**', component: CityComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }