import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CabinetRoutingModule } from './cabinet-routing.module';
import { CabinetComponent } from './cabinet.component';
import { VolunteersListComponent } from './components/volunteers-list/volunteers-list.component';
import { NewVolunteerComponent } from './components/new-volunteer/new-volunteer.component';
import { VolunteerDetailsComponent } from './components/volunteer-details/volunteer-details.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { EventssComponent } from './components/eventss/eventss.component';
import { ReportssComponent } from './components/reportss/reportss.component';
import { AdminComponent } from './components/admin/admin.component';
import { TableModule } from 'primeng/table';
import { VolunteersService } from '../core/services/volunteers.service';
import { MaterialModule } from '../material.module';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    CabinetComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    VolunteersListComponent,
    NewVolunteerComponent,
    VolunteerDetailsComponent,
    TrainingsComponent,
    EventssComponent,
    ReportssComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    CabinetRoutingModule,
    TableModule,
    MaterialModule,
    InputTextModule
  ],
  providers: [
    VolunteersService
  ],
})
export class CabinetModule { }
