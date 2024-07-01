import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HealthServicesService } from 'src/app/services/health-services.service';
import { Appointment } from 'src/app/shared/models/appointment';

@Component({
  selector: 'app-doctors-dashboard',
  templateUrl: './doctors-dashboard.component.html',
  styleUrls: ['./doctors-dashboard.component.css']
})
export class DoctorsDashboardComponent {
  // @Input('maxPages') maxPages:number = 0;
  // @Input('current') currentPage:number = 0;
  // @Output('pageChange') onPageChange = new EventEmitter<number>();
  constructor(
    // private healthService:HealthServicesService,
    // private authservice:AuthService
  ){}

  // filters:any={
  //   page:1,
  //   limit:4
  // };
  // buttonLimit: number =100;
  // get lowerButtonLimit():number{
  //   return Math.abs(this.currentPage / this.buttonLimit)< 1 ? 0 : this.currentPage - 3;
  // }
  // get upperButtonLimit():number{
  //   return Math.min(this.maxPages, Math.abs(this.currentPage/ this.buttonLimit) < 1 ? this.buttonLimit: this.currentPage + 2 );
  // }
  // get pageButton():number[] {
  //   return new Array(this.maxPages).fill(null).map((v,i)=> i + 1);
  // }
  // gotoPage(newPage: number):void{
  //   this.filters.page= (newPage<=0)? 1:(newPage> this.maxPages)? this.maxPages :newPage;
  //   this.appointments()
  //   console.log(newPage)
  // }
  // ngInit():void{
  // }

  // meetings?:Appointment[]=[];
  
  // appointments(){
  //   this.authservice.doctorAppointments().subscribe(res=>{
  //   // this.healthService.doctorAppointments(this.filters).subscribe(res=>{
  //     if(res.status == 'success'){
  //       this.meetings = res.data!['appointments'];
  //       this.maxPages = res['numPages']
  //     }
  //     console.log(res['status']);
  //   });
  // };
};