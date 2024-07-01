import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HealthServicesService } from 'src/app/services/health-services.service';
import { DoctorSingle } from 'src/app/shared/models/appointment';


@Component({
  selector: 'app-doctors-update',
  templateUrl: './doctors-update.component.html',
  styleUrls: ['./doctors-update.component.css']
})
export class DoctorsUpdateComponent implements OnInit {
  constructor(private healthserves:HealthServicesService,
    private router:Router, private route:ActivatedRoute){}
    doctors:any =[];
    doctor?:DoctorSingle;
    id:number = 0;
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      if(this.id > 0){
        this.healthserves.singleDoctors(this.id).subscribe(res=>{
          if(res['status']== 'success'){
            const currentDoctor = res!['data']!['doctor']
            this.assignForm?.setValue({
              f_nm:currentDoctor['first_name'],
              l_nm:currentDoctor['last_name'],
              p_nbr:currentDoctor['phone_num'],
              eml:currentDoctor['email'],
              pos:currentDoctor['position'],
              dep:currentDoctor['department'],
              pass:currentDoctor['password'],
            })
          }
        })
      }

      this.singleDoctors();
    }
    @ViewChild('assinForm')assignForm?:NgForm;

    singleDoctors(){
      this.id = this.route.snapshot.params['id'];
      this.healthserves.singleDoctors(this.id).subscribe(res=>{
        this.doctor= res['data']!['doctor'];
      })
    }

    updateDoctor(oForm:NgForm){
      this.healthserves.updateDoctor(this.id, oForm.value).subscribe(res=>{
        if(res['status']=='success'){
          Swal.fire({
            icon:'success',
            title:'Update success',
          });
          this.router.navigateByUrl('/doctorsSingleView/' + this.id);
        }else{
          Swal.fire({
            icon:'error',
            title:'Failed to update'
          })
        }
      })
    }

    deleteDoctor(){
      this.id = this.route.snapshot.params['id']
      this.healthserves.deleteDoctor(this.id).subscribe(res =>{
        if(res['status'] == 'success'){
          Swal.fire({
            icon:'success',
            title:'Data no longer exsists'
          });
          this.router.navigateByUrl('/doctors');
        }else{
          Swal.fire({
            icon:'error',
            title:'Filed to execute'
          })
        }
      })
    }
}
