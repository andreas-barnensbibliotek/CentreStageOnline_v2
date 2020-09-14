import { CreditsComponent } from './credits/credits.component';
import { AboutComponent } from './about/about.component';
import { OverviewComponent } from './overview/overview.component';
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
  { path: 'overview',  component: OverviewComponent}, 
  { path: 'about',  component: AboutComponent}, 
  { path: 'credits',  component: CreditsComponent}, 
  { path: 'episodes', 
    loadChildren: './lections/lection-router/lection-router.module#LectionRouterModule',
    canActivate: [AuthGuard]},     
  // { path:':slug', component: GenericMainpageComponent},  // använd denna om du vill ha dynamiska länkar i root nav
  { path: '**',  component: Err404pageComponent},   
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
