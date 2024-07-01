import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HealthServicesService } from 'src/app/services/health-services.service';
import Swal from 'sweetalert2';
import { Patient,Doctor,Room, Admin } from 'src/app/shared/models/appointment';

@Component({
  selector: 'app-appointments-create',
  templateUrl: './appointments-create.component.html',
  styleUrls: ['./appointments-create.component.css']
})
export class AppointmentsCreateComponent implements OnInit{
  constructor(private healtheservices: HealthServicesService,
    private router: Router){}
  
    // person = []

  filters:any ={
    page:1,
    limit:100
  }
  ngOnInit(): void {
    this.allPatients();
    this.allDoctors();
    this.allRoom();
    this.allAdmin();
  }
  patient?:Patient[]=[];
  doctor?:Doctor[]=[];
  room?:Room[]=[];
  admin?:Admin[]=[];
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
  
  makeAppointment(oForm: NgForm){
    this.healtheservices.createAppointment(oForm.value).subscribe(res=>{
      if(res['status']=='success'){
        Swal.fire({
          icon:'success',
          title:'Appointment Made'
        })
        this.router.navigateByUrl('/appointments')
      }else{
        Swal.fire({
          icon:'error',
          title:'Could not create'
        })
      }
    })
  }

}
