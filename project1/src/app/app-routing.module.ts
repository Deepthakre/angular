import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogingComponent} from './loging/loging.component'
import { CoursesComponent } from './courses/courses.component';
import { ModalComponent } from './modal/modal.component';

const routes: Routes=[
  {path:"",redirectTo:'courses', pathMatch:'full'},
  { path: "loging", component: LogingComponent },
  { path: "courses", component: CoursesComponent },
  { path: "modal", component: ModalComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
