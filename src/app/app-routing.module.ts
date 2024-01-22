import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VolunteersListComponent } from './companents/volunteers-list/volunteers-list.component';
import { LoginComponent } from './companents/login/login.component';
import { RegisterComponent } from './companents/register/register.component';
import { NewVolunteerComponent } from './companents/new-volunteer/new-volunteer.component';
import { VolunteerDetailsComponent } from './companents/volunteer-details/volunteer-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/volunteers-list', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'volunteers-list', component: VolunteersListComponent},
  { path: 'volunteer-details', component: VolunteerDetailsComponent },
  { path: 'new-volunteer', component: NewVolunteerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
