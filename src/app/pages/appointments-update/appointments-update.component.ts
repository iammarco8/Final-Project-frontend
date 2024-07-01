import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HealthServicesService } from 'src/app/services/health-services.service';
import Swal from 'sweetalert2';
import { Patient, Doctor, Room, Admin, AppointmentSingle } from 'src/app/shared/models/appointment';

@Component({
  selector: 'app-appointments-update',
  templateUrl: './appointments-update.component.html',
  styleUrls: ['./appointments-update.component.css']
})
export class AppointmentsUpdateComponent implements OnInit{
  // oldAppointemnt2: any= {}
  // @ViewChild('updateForm') updateForm?: NgForm;

  constructor(
    private healtheservices: HealthServicesService,
    private router:Router, 
    private route:ActivatedRoute){}

    filters:any ={
      page:1,
      limit:100
    }
    ngOnInit(): void {
      this.allPatients();
      this.allDoctors();
      this.allRoom();
      this.allAdmin();
      this.singleAppointment();
    }
    patient?:Patient[]=[];
    doctor?:Doctor[]=[];
    room?:Room[]=[];
    admin?:Admin[]=[];
    oldAppointment?:AppointmentSingle;
    
    id:number = 0;
    allPatients(){
      this.healtheservices.fullListPatients(this.filters).subscribe(res=>{
        if(res['status']=='success'){
          this.patient = res.data!['patients']
        }
      })
    }
    allDoctors(){
      this.healtheservices.fullListDoctors(this.filters).subscribe(res=>{
        this.doctor = res.data!['doctor']
      })
    }
    allRoom(){
      this.healtheservices.fullListRoom(this.filters).subscribe(res=>{
        this.room = res.data!['rooms']
      })
    }
    allAdmin(){
      this.healtheservices.fullListAdmin(this.filters).subscribe(res=>{
        this.admin = res.data!['admin']
      })
    }
    singleAppointment(){
      this.id = this.route.snapshot.params['id']
      this.healtheservices.singleAppointments(this.id).subscribe(res=>{
        this.oldAppointment= res['data']!['appointment']
      })
    }


  //   patchForm(): void {
  //     this.updateForm.form.patchValue(this.oldAppointment);
  // }
  
    
    updateAppointment( oForm: NgForm){
      this. id = this.route.snapshot.params['id']
      this.healtheservices.updateAppointment(this.id, oForm.value).subscribe(res=>{
        if(res['status']=='success'){
          Swal.fire({
            icon:'success',
            title:'Appointment Made'
          })
          this.router.navigateByUrl('/appointmentsSingleView/' + this.id )
        }else{
          Swal.fire({
            icon:'error',
            title:'Could not update'
          })
        }
      })
    }

    deleteAppointment(){
      this.id = this.route.snapshot.params['id']
      this.healtheservices.deleteAppointment(this.id).subscribe(res=>{
        if (res['status'] == 'success'){
          Swal.fire({
            icon:'success',
            title:'Data removed'
          })
          this.router.navigateByUrl('/appointments');
        }else{
          Swal.fire({
            icon:'error',
            title:'Unable to remove'
          })
        }
      })
    }

}
