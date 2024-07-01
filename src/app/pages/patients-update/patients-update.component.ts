import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HealthServicesService } from 'src/app/services/health-services.service';
import { PatientSingle } from 'src/app/shared/models/appointment';


@Component({
  selector: 'app-patients-update',
  templateUrl: './patients-update.component.html',
  styleUrls: ['./patients-update.component.css']
})
export class PatientsUpdateComponent implements OnInit {
  constructor(private healthserves:HealthServicesService,
    private router:Router, private route:ActivatedRoute){}
    patients:any =[];
    patient?:PatientSingle;
    id:number = 0;
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      if(this.id > 0){
        this.healthserves.singlePatient(this.id).subscribe(res=>{
          if(res['status']== 'success'){
            const currentpatient = res!['data']!['patient']
            this.assignForm?.setValue({
              f_nm:currentpatient['first_name'],
              l_nm:currentpatient['last_name'],
              p_nbr:currentpatient['phone_num'],
              eml:currentpatient['email']
              // pos:currentDoctor['position'],
              // dep:currentDoctor['department'],
              // pass:currentDoctor['password'],
            })
          }
        })
      }

      this.singlepatients();
    }
    @ViewChild('assinForm')assignForm?:NgForm;

    singlepatients(){
      this.id = this.route.snapshot.params['id'];
      this.healthserves.singlePatient(this.id).subscribe(res=>{
        this.patient= res['data']!['patients'];
      })
    }

    updatePatient(oForm:NgForm){
      this.healthserves.updatePatient(this.id, oForm.value).subscribe(res=>{
        if(res['status']=='success'){
          Swal.fire({
            icon:'success',
            title:'Update success',
          });
          this.router.navigateByUrl('/patientsSingleView/' + this.id);
        }else{
          Swal.fire({
            icon:'error',
            title:'Failed to update'
          })
        }
      })
    }

    deletePatient(){
      this.id = this.route.snapshot.params['id']
      this.healthserves.deletePatient(this.id).subscribe(res =>{
        if(res['status'] == 'success'){
          Swal.fire({
            icon:'success',
            title:'Data no longer exsists'
          });
          this.router.navigateByUrl('/patients');
        }else{
          Swal.fire({
            icon:'error',
            title:'Filed to execute'
          })
        }
      })
    }
}

