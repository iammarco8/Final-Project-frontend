import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { AdminsComponent } from './pages/admins/admins.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AboutComponent } from './pages/about/about.component';
import { AppointmentsSingleViewComponent } from './pages/appointments-single-view/appointments-single-view.component';
import { AppointmentsUpdateComponent } from './pages/appointments-update/appointments-update.component';
import { AdminsSingleViewComponent } from './pages/admins-single-view/admins-single-view.component';
import { AdminsUpdateComponent } from './pages/admins-update/admins-update.component';
import { PatientsSingleViewComponent } from './pages/patients-single-view/patients-single-view.component';
import { PatientsUpdateComponent } from './pages/patients-update/patients-update.component';
import { RoomsSingleViewComponent } from './pages/rooms-single-view/rooms-single-view.component';
import { RoomsUpdateComponent } from './pages/rooms-update/rooms-update.component';
import { DoctorsSingleViewComponent } from './pages/doctors-single-view/doctors-single-view.component';
import { DoctorsUpdateComponent } from './pages/doctors-update/doctors-update.component';
import { AppointmentsCreateComponent } from './pages/appointments-create/appointments-create.component';
import { AdminsCreateComponent } from './pages/admins-create/admins-create.component';
import { PatientsCreateComponent } from './pages/patients-create/patients-create.component';
import { RoomsCreateComponent } from './pages/rooms-create/rooms-create.component';
import { DoctorsCreateComponent } from './pages/doctors-create/doctors-create.component';
import { FormsModule } from '@angular/forms';
import { TokenInterceptor } from './shared/interceptor/token.interceptor';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './partials/logout/logout.component';
import { DoctorsDashboardComponent } from './pages/doctors-dashboard/doctors-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppointmentsComponent,
    AdminsComponent,
    PatientsComponent,
    RoomsComponent,
    DoctorsComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent,
    AboutComponent,
    AppointmentsSingleViewComponent,
    AppointmentsUpdateComponent,
    AdminsSingleViewComponent,
    AdminsUpdateComponent,
    PatientsSingleViewComponent,
    PatientsUpdateComponent,
    RoomsSingleViewComponent,
    RoomsUpdateComponent,
    DoctorsSingleViewComponent,
    DoctorsUpdateComponent,
    AppointmentsCreateComponent,
    AdminsCreateComponent,
    PatientsCreateComponent,
    RoomsCreateComponent,
    DoctorsCreateComponent,
    LoginComponent,
    LogoutComponent,
    DoctorsDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
