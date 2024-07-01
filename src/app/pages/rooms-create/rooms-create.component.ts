import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HealthServicesService } from 'src/app/services/health-services.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-rooms-create',
  templateUrl: './rooms-create.component.html',
  styleUrls: ['./rooms-create.component.css']
})
export class RoomsCreateComponent {
  constructor(private healthservice: HealthServicesService){}
  ngOninit(): void{

  }
  createRoom(oForm: NgForm){
    this.healthservice.createRoom(oForm.value).subscribe(res=>{
      if(res['status']== 'success'){
        Swal.fire({
          icon:'success',
          title:'Room added'
        })
      }else{
        Swal.fire({
          icon:'error',
          title:'could not add the room' 
        })
      }
    })
  }
}
