import { Routes } from '@angular/router';
import { HobbiesComponent } from '../hobbies/hobbies.component';
import { SubjectsComponent } from '../subjects/subjects.component';
import { LikesComponent } from './likes/likes.component';

export const routes: Routes = [
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'subjects', component: SubjectsComponent },
  {path:'likes', component: LikesComponent},
  { path: '', redirectTo: '/likes', pathMatch: 'full' }
];