import { CoursenavComponent } from './../coursenav/coursenav.component';
import { GenericLectionsComponent } from './../generic-lections/generic-lections.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LectionMainComponent } from '../lection-main/lection-main.component';

const appRoutes: Routes = [
    { 
      path: '' ,
      component: LectionMainComponent,
      children:[
        {path:'',component: GenericLectionsComponent },
        {path:'test',component: CoursenavComponent }        
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class LectionRouterModule { }

