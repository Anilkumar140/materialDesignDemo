import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { StepperComponent } from './stepper/stepper.component';
import { TableComponent } from './table/table.component';
import { TablerowGroupingComponent } from './tablerow-grouping/tablerow-grouping.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent 
  },
  {
    path:"home",component:HomeComponent 
  },
  {
    path:"carousal",component:HomeComponent 
  },
  {
    path:"form",component:FormsComponent 
  },
  {
    path:"table",component:TableComponent 
  },
  {
    path:"stepper",component:StepperComponent
  },
  {
    path:"rowgroup",component:TablerowGroupingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
