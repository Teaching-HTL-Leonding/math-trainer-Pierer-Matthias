import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseComponent } from './exercise/exercise.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [  { path: '', pathMatch: 'full', component:  SettingsComponent},
{ path: 'settings', component: SettingsComponent },
{ path: 'exercises', component: ExerciseComponent
 },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
