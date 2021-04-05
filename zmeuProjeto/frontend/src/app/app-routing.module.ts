import { NgModule, Component }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HomeComponent }        from './views/home/home.component';
import { CurriculumComponent }  from './views/curriculum/curriculum.component';
import { ContactComponent }     from './views/contact/contact.component';

const routes: Routes = [
  {
  path:"",
  component:HomeComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"curriculum",
    component:CurriculumComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
