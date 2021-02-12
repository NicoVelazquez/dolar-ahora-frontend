import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {NewsSectionComponent} from './news-section/news-section.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'seccion/:sectionName', component: NewsSectionComponent},
  {path: 'error', component: NotFoundComponent},
  {path: '**', redirectTo: '/error'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
