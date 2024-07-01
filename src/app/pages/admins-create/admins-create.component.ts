import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HealthServicesService } from 'src/app/services/health-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admins-create',
  templateUrl: './admins-create.component.html',
  styleUrls: ['./admins-create.component.css']
})
export class AdminsCreateComponent implements OnInit{
  constructor(private healthservices: HealthServicesService,
    private router:Router
  ){}
  ngOnInit(): void {
    
  }
  createAdmin(oForm:NgForm){
    this.healthservices.createAdmin(oForm.value).subscribe(res=>{
      if(res['status']=='success'){
        Swal.fire({
          icon:'success',
          title:'Admin Added'
        })
        this.router.navigateByUrl('/admins');
      }else{
        Swal.fire({
          icon:'error',
          title:'Could not add admin'
        })
      }
    })
  }
}
