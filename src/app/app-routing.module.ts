import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ClassesComponent } from './classes/classes.component';
import { EventsComponent } from './events/events.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './user/register/register.component';
import { PolicyComponent } from './policy/policy.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FaqComponent } from './faq/faq.component';
import { AdminComponent } from './adminView/admin/admin.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent, title:"About - ReynoDance"},
  {path: 'classes', component: ClassesComponent, title:"Classes - ReynoDance"},
  {path: 'events', component: EventsComponent, title:"Events - ReynoDance"},
  {path: 'register', component: RegisterComponent, title:"Register - ReynoDance"},
  {path: 'sign-in', component: SignInComponent, title:"Sign-In - ReynoDance"},
  {path: 'dashboard', component: DashboardComponent, title:"Dashboard - ReynoDance"},
  {path: '', component: HomeComponent, title:"ReynoDance Academy"},
  {path: 'faq', component: FaqComponent, title:"FAQ - ReynoDance"},
  {path: 'policy', component: PolicyComponent, title:"Rules & Regulations - ReynoDance"},
  {path: 'schedule', component: ScheduleComponent, title:"Schedule - ReynoDance"},
  {path: 'admin', component: AdminComponent, title:"Admin - ReynoDance"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
