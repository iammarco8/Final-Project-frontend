import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AboutComponent } from './pages/about/about.component';
import { DoctorsCreateComponent } from './pages/doctors-create/doctors-create.component';
import { DoctorsSingleViewComponent } from './pages/doctors-single-view/doctors-single-view.component';
import { AppointmentsCreateComponent } from './pages/appointments-create/appointments-create.component';
import { AppointmentsUpdateComponent } from './pages/appointments-update/appointments-update.component';
import { DoctorsUpdateComponent } from './pages/doctors-update/doctors-update.component';
import { AppointmentsSingleViewComponent } from './pages/appointments-single-view/appointments-single-view.component';
import { PatientsCreateComponent } from './pages/patients-create/patients-create.component';
import { PatientsUpdateComponent } from './pages/patients-update/patients-update.component';
import { PatientsSingleViewComponent } from './pages/patients-single-view/patients-single-view.component';
import { RoomsCreateComponent } from './pages/rooms-create/rooms-create.component';
import { RoomsUpdateComponent } from './pages/rooms-update/rooms-update.component';
import { RoomsSingleViewComponent } from './pages/rooms-single-view/rooms-single-view.component';
import { AdminsComponent } from './pages/admins/admins.component';
import { AdminsCreateComponent } from './pages/admins-create/admins-create.component';
import { AdminsUpdateComponent } from './pages/admins-update/admins-update.component';
import { AdminsSingleViewComponent } from './pages/admins-single-view/admins-single-view.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './partials/logout/logout.component';
import { AuthguardGuard } from './shared/guards/auth.guard';
import { DoctorsDashboardComponent } from './pages/doctors-dashboard/doctors-dashboard.component';

const routes: Routes = [
  // online sole front ends
  {path:'home', title: 'Home', component:HomeComponent, pathMatch:'full'},
  {path:'about', title:'AboutUs', component:AboutComponent},
  
  // backend dependent views
  
  //  doctors views
  {path:'doctors', title: 'Doctors', component:DoctorsComponent},
  {path:'doctorsCreate', title: 'DoctorsCreate', component:DoctorsCreateComponent},
  {path:'doctorsUpdate/:id', title: 'DoctorsUpdate',component:DoctorsUpdateComponent, canActivate: [AuthguardGuard]},
  {path:'doctorsSingleView/:id', title: 'DoctorsSingleView', component:DoctorsSingleViewComponent, canActivate: [AuthguardGuard]},
  {path:'doctorUser/:id', title:'DoctorUser', component:DoctorsDashboardComponent, canActivate: [AuthguardGuard]},

  // appointment views
  {path:'appointments', title: 'Appointments', component:AppointmentsComponent, canActivate: [AuthguardGuard]},
  {path:'appointmentsCreate', title: 'AppointmentsCreate', component:AppointmentsCreateComponent, canActivate: [AuthguardGuard]},
  {path:'appointmentsUpdate/:id', title: 'AppointmentsUpdate', component:AppointmentsUpdateComponent, canActivate: [AuthguardGuard]},
  {path:'appointmentsSingleView/:id', title: 'AppointmentSingleView', component:AppointmentsSingleViewComponent, canActivate: [AuthguardGuard]},
  
  // patient views
  {path:'patients', title: 'Patients', component:PatientsComponent, canActivate: [AuthguardGuard]},
  {path:'patientsCreate', title: 'PatientsCreate', component:PatientsCreateComponent},
  {path:'patientsUpdate/:id', title: 'PatientsUpdate', component:PatientsUpdateComponent, canActivate: [AuthguardGuard]},
  {path:'patientsSingleView/:id', title: 'PatientsSingleView', component:PatientsSingleViewComponent, canActivate: [AuthguardGuard]},
  
  // room views
  {path:'rooms', title: 'Rooms', component:RoomsComponent, canActivate: [AuthguardGuard]},
  {path:'roomsCreate', title:' RoomsCreate', component:RoomsCreateComponent, canActivate: [AuthguardGuard]},
  {path:'roomsUpdate/:id', title: 'RoomsUpdate', component:RoomsUpdateComponent, canActivate: [AuthguardGuard]},
  {path:'roomsSingleView/:id', title: 'RoomSingleView', component:RoomsSingleViewComponent, canActivate: [AuthguardGuard]},
 
  //  admin view
  {path:'admins', title: 'Admins', component:AdminsComponent, canActivate: [AuthguardGuard]},
  {path:'adminsCreate', title: 'AdminsCreate', component:AdminsCreateComponent, canActivate: [AuthguardGuard]},
  {path:'adminsUpdate/:id', title: 'AdminsUpdate', component:AdminsUpdateComponent, canActivate: [AuthguardGuard]},
  {path:'adminsSingleView/:id', title: 'AdminsSingleView', component:AdminsSingleViewComponent, canActivate: [AuthguardGuard]},

  // auth views
  {path:'login', component: LoginComponent},


  // insecure routes
  // {path:'doctors', title: 'Doctors', component:DoctorsComponent},
  // {path:'doctorsCreate', title: 'DoctorsCreate', component:DoctorsCreateComponent},
  // {path:'doctorsUpdate/:id', title: 'DoctorsUpdate',component:DoctorsUpdateComponent},
  // {path:'doctorsSingleView/:id', title: 'DoctorsSingleView', component:DoctorsSingleViewComponent},
  
  // {path:'appointments', title: 'Appointments', component:AppointmentsComponent},
  // {path:'appointmentsCreate', title: 'AppointmentsCreate', component:AppointmentsCreateComponent},
  // {path:'appointmentsUpdate/:id', title: 'AppointmentsUpdate', component:AppointmentsUpdateComponent},
  // {path:'appointmentsSingleView/:id', title: 'AppointmentSingleView', component:AppointmentsSingleViewComponent},
  
  // {path:'patients', title: 'Patients', component:PatientsComponent},
  // {path:'patientsCreate', title: 'PatientsCreate', component:PatientsCreateComponent},
  // {path:'patientsUpdate/:id', title: 'PatientsUpdate', component:PatientsUpdateComponent},
  // {path:'patientsSingleView/:id', title: 'PatientsSingleView', component:PatientsSingleViewComponent},
 
  // {path:'rooms', title: 'Rooms', component:RoomsComponent},
  // {path:'roomsCreate', title:' RoomsCreate', component:RoomsCreateComponent},
  // {path:'roomsUpdate/:id', title: 'RoomsUpdate', component:RoomsUpdateComponent},
  // {path:'roomsSingleView/:id', title: 'RoomSingleView', component:RoomsSingleViewComponent},
 
  // {path:'admins', title: 'Admins', component:AdminsComponent},
  // {path:'adminsCreate', title: 'AdminsCreate', component:AdminsCreateComponent},
  // {path:'adminsUpdate/:id', title: 'AdminsUpdate', component:AdminsUpdateComponent},
  // {path:'adminsSingleView/:id', title: 'AdminsSingleView', component:AdminsSingleViewComponent},
  //[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] //
  {path:'logout', component: LogoutComponent},
  
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }