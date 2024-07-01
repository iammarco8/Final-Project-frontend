import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HealthServicesService } from 'src/app/services/health-services.service';
import { AdminSingle } from 'src/app/shared/models/appointment';

@Component({
  selector: 'app-admins-update',
  templateUrl: './admins-update.component.html',
  styleUrls: ['./admins-update.component.css']
})
export class AdminsUpdateComponent implements OnInit {
  constructor(private healthserves:HealthServicesService,
    private router:Router, private route:ActivatedRoute){}
    admins:any =[];
    admin?:AdminSingle;
    id:number = 0;
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      if(this.id > 0){
        this.healthserves.singleAdmin(this.id).subscribe(res=>{
          if(res['status']== 'success'){
            const currentAdmin = res!['data']!['admin']
            this.assignForm?.setValue({
              f_nm:currentAdmin['first_name'],
              l_nm:currentAdmin['last_name'],
              p_nbr:currentAdmin['phone_num'],
              eml:currentAdmin['email'],
              pos:currentAdmin['position'],
              dep:currentAdmin['department'],
              pass:currentAdmin['password'],
            })
          }
        })
      }

      this.singleAdmin();
    }
    @ViewChild('assinForm')assignForm?:NgForm;

    singleAdmin(){
      this.id = this.route.snapshot.params['id'];
      this.healthserves.singleAdmin(this.id).subscribe(res=>{
        this.admin= res['data']!['admin'];
      })
    }

    updateAdmin(oForm:NgForm){
      this.healthserves.updateAdmin(this.id, oForm.value).subscribe(res=>{
        if(res['status']=='success'){
          Swal.fire({
            icon:'success',
            title:'Update success',
          });
          this.router.navigateByUrl('/admins');
          // this.router.navigateByUrl('/adminsSingleView/' + this.id);
        }else{
          Swal.fire({
            icon:'error',
            title:'Failed to update'
          })
        }
      })
    }

    deleteAdmin(){
      this.id = this.route.snapshot.params['id']
      this.healthserves.deleteAdmin(this.id).subscribe(res =>{
        if(res['status'] == 'success'){
          Swal.fire({
            icon:'success',
            title:'Data no longer exsists'
          });
          this.router.navigateByUrl('/admins');
        }else{
          Swal.fire({
            icon:'error',
            title:'Filed to execute'
          })
        }
      })
    }
}
