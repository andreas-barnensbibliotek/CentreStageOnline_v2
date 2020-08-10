import { StartComponent } from './start/start.component';
import { GenericLectionsComponent } from './lections/generic-lections/generic-lections.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '',  redirectTo: 'start', pathMatch: 'full' },
  { path: 'start',  component: StartComponent},    
  { path: ':slug',  component: GenericLectionsComponent, data: { preload: true, delay: false }},    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
