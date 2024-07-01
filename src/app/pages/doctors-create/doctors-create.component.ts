import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { NgForm } from '@angular/forms';
import { HealthServicesService } from 'src/app/services/health-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctors-create',
  templateUrl: './doctors-create.component.html',
  styleUrls: ['./doctors-create.component.css']
})
export class DoctorsCreateComponent {
  constructor(private healthservice: HealthServicesService)  {}
  ngOninit():void{

  }

  createDoctors(oform:NgForm){
    this.healthservice.createDoctor(oform.value).subscribe(res=>{
      if(res['status']== 'success'){
        Swal.fire({
          icon:'success',
          title:'Doctor added'
        })
      }else{
        Swal.fire({
          icon:'error',
          title:'Something went wrong'
        })
      }
    })
  }
}
