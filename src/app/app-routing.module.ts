import { IspisComponent } from './components/ispis/ispis.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'city/Tuzla',
    pathMatch: 'full'
  },
  {
    path:'city/:name',
    component: IspisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
