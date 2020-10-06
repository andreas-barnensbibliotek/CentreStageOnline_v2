import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { authstartabout } from './shared/autguardStart/authstartabout.guard';
import { AuthGuardStart } from './shared/autguardStart/authstart.guard';
import { CreditsComponent } from './credits/credits.component';
import { AboutComponent } from './about/about.component';
import { OverviewComponent } from './overview/overview.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './shared/authguard/auth.guard';
import { Err404pageComponent } from './shared/err404page/err404page.component';
import { StartComponent } from './start/start.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routerOptions: ExtraOptions = {
  enableTracing: true,
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};
const routes: Routes = [
  { path: '',  redirectTo: 'start', pathMatch: 'full' },  
  { path: 'start',  component: StartComponent, canActivate:[authstartabout]}, 
  { path: 'welcome',  component: WelcomeComponent, canActivate:[AuthGuardStart]},   
  { path: 'register',  component: RegisterComponent, canActivate: [AuthGuardStart]}, 
  { path: 'overview',  component: OverviewComponent, canActivate: [AuthGuardStart]}, 
  { path: 'about',  component: AboutComponent, canActivate: [AuthGuardStart]}, 
  { path: 'credits',  component: CreditsComponent, canActivate: [AuthGuardStart]}, 
  { path: 'episodes', 
    loadChildren: './lections/lection-router/lection-router.module#LectionRouterModule',
    canActivate: [AuthGuard]},     
  // { path:':slug', component: GenericMainpageComponent},  // använd denna om du vill ha dynamiska länkar i root nav
  { path: '**',  component: Err404pageComponent},   
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
