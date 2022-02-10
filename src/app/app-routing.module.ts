import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/MyComponents/home/home.component';
import { ReactiveFormComponent } from 'src/app/MyComponents/reactive-form/reactive-form.component';
import {TemplateDrivenFormComponent} from 'src/app/MyComponents/template-driven-form/template-driven-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'template-form', component: TemplateDrivenFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
