import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NewVolunteerComponent } from './companents/new-volunteer/new-volunteer.component';
import { VolunteerDetailsComponent } from './companents/volunteer-details/volunteer-details.component';
import { VolunteersListComponent } from './companents/volunteers-list/volunteers-list.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './companents/login/login.component';
import { RegisterComponent } from './companents/register/register.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewVolunteerComponent,
    VolunteerDetailsComponent,
    VolunteersListComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
