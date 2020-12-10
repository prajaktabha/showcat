import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';

import { BtComponent } from './components/bt/bt.component';
import { AppComponent } from './app.component';

import { GkComponent } from './components/gk/gk.component';
import { LtComponent } from './components/lt/lt.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'add', component: AddTutorialComponent },
  { path:'bt/:id',component:BtComponent}
  // {path:'mcq',component:McqbtComponent},
  // {path:'descriptive',component:McqdesComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
