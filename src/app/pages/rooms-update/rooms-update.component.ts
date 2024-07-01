import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HealthServicesService } from 'src/app/services/health-services.service';
import { RoomSingle } from 'src/app/shared/models/appointment';

@Component({
  selector: 'app-rooms-update',
  templateUrl: './rooms-update.component.html',
  styleUrls: ['./rooms-update.component.css']
})
export class RoomsUpdateComponent implements OnInit {
  constructor(private healthserves:HealthServicesService,
    private router:Router, private route:ActivatedRoute){}
    rooms:any =[];
    room?:RoomSingle;
    id:number = 0;
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      if(this.id > 0){
        this.healthserves.singleRoom(this.id).subscribe(res=>{
          if(res['status']== 'success'){
            const currentroom = res!['data']!['room']
            this.assignForm?.setValue({
              f_nm:currentroom['id_num'],
              l_nm:currentroom['ward'],
              p_nbr:currentroom['floor'],
              eml:currentroom['availability_status']
            })
          }
        })
      }

      this.singlerooms();
    }
    @ViewChild('assinForm')assignForm?:NgForm;

    singlerooms(){
      this.id = this.route.snapshot.params['id'];
      this.healthserves.singleRoom(this.id).subscribe(res=>{
        this.room= res['data']!['room'];
      })
    }
    updateroom(oForm:NgForm){
      this.id = this.route.snapshot.params['id'];
      this.healthserves.updateRoom(this.id, oForm.value).subscribe(res=>{
        if(res['status']=='success'){
          Swal.fire({
            icon:'success',
            title:'Update success',
          });
          this.router.navigateByUrl('/roomsSingleView/' + this.id);
        }else{
          Swal.fire({
            icon:'error',
            title:'Failed to update'
          })
        }
      })
    }

    deleteroom(){
      this.id = this.route.snapshot.params['id']
      this.healthserves.deleteRoom(this.id).subscribe(res =>{
        if(res['status'] == 'success'){
          Swal.fire({
            icon:'success',
            title:'Data no longer exsists'
          });
          this.router.navigateByUrl('/rooms');
        }else{
          Swal.fire({
            icon:'error',
            title:'Filed to execute'
          })
        }
      })
    }
}


