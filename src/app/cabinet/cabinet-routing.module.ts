import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabinetComponent } from './cabinet.component';
import { VolunteersListComponent } from './components/volunteers-list/volunteers-list.component';
import { VolunteerDetailsComponent } from './components/volunteer-details/volunteer-details.component';
import { NewVolunteerComponent } from './components/new-volunteer/new-volunteer.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { EventssComponent } from './components/eventss/eventss.component';
import { ReportssComponent } from './components/reportss/reportss.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: CabinetComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'volunteers-list'
      },
      {
        path: 'volunteers-list',
        component: VolunteersListComponent
      },
      {
        path: 'volunteer-details/:volunteerId',
        component: VolunteerDetailsComponent
      },
      {
        path: 'trainings',
        component: TrainingsComponent
      },
      {
        path: 'eventss',
        component: EventssComponent
      },
      {
        path: 'reportss',
        component: ReportssComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CabinetRoutingModule { }
