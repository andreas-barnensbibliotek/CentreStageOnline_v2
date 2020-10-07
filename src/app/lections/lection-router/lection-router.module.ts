import { EvaluationComponent } from './../evaluation/evaluation.component';
import { OverviewComponent } from './../../overview/overview.component';
import { CoursenavComponent } from './../coursenav/coursenav.component';
import { GenericLectionsComponent } from './../generic-lections/generic-lections.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { LectionMainComponent } from '../lection-main/lection-main.component';

const appRoutes: Routes = [
    { 
      path: '' ,
      component: LectionMainComponent,
      children:[
        {path:'',component: OverviewComponent },
        {path:'test',component: CoursenavComponent },
        {path:'episode-14',component: EvaluationComponent } ,
        {path:':slug',component: GenericLectionsComponent }              
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class LectionRouterModule { }

