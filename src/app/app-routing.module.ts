import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppViewComponent} from "./components/app-view/app-view.component";

const routes: Routes = [
  {path: 'application', component: AppViewComponent},
  {path: '', redirectTo: 'application', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
