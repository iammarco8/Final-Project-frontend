import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HealthServicesService } from 'src/app/services/health-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patients-create',
  templateUrl: './patients-create.component.html',
  styleUrls: ['./patients-create.component.css']
})
export class PatientsCreateComponent implements OnInit {
  constructor(private healthServices: HealthServicesService){}
  ngOnInit(): void {
    
  }

  createPatient( oForm: NgForm){
    this.healthServices.createPatient(oForm.value).subscribe(res=>{
      if(res['status']=='success'){
        Swal.fire({
          icon:'success',
          title:'Patient added'
        })
      }else{
        Swal.fire({
          icon:'error',
          title:'Could not add patient'
        })
      }
    })
  }

}
