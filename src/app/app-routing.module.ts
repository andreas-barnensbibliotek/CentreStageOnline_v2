import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './shared/authguard/auth.guard';
import { Err404pageComponent } from './shared/err404page/err404page.component';
import { StartComponent } from './start/start.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '',  redirectTo: 'start', pathMatch: 'full' },  
  { path: 'start',  component: StartComponent},   
  { path: 'register',  component: RegisterComponent},   
  { path: 'lectures', 
    loadChildren: './lections/lection-router/lection-router.module#LectionRouterModule',
    canActivate: [AuthGuard]},     
  { path: '**',  component: Err404pageComponent},   
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
