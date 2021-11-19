import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHabitComponent } from './add-habit/add-habit.component';
import { EditHabitComponent } from './edit-habit/edit-habit.component';
import { HabitDetailsComponent } from './habit-details/habit-details.component';
import { HabitListComponent } from './habit-list/habit-list.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import {SignUpComponent} from './sign-up/sign-up.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  { path: 'habits', component: HabitListComponent },
  { path: 'add', component: AddHabitComponent },
  { path: 'update/:id', component: EditHabitComponent },
  { path: 'details/:id', component: HabitDetailsComponent },
  { path: 'reset', component: ResetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
