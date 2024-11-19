import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ClassesComponent } from './classes/classes.component';
import { EventsComponent } from './events/events.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent, title:"About - ReynoDance"},
  {path: 'classes', component: ClassesComponent, title:"Classes - ReynoDance"},
  {path: 'events', component: EventsComponent, title:"Events - ReynoDance"},
  {path: 'register', component: RegisterComponent, title:"Register - ReynoDance"},
  {path: 'sign-in', component: SignInComponent, title:"Sign-In - ReynoDance"},
  {path: 'dashboard', component: DashboardComponent, title:"Dashboard - ReynoDance"},
  {path: '', component: HomeComponent, title:"ReynoDance Academy"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
