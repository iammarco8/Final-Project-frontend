import { Component, OnInit, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import { HealthServicesService } from 'src/app/services/health-services.service';
import { Appointment, Doctor} from 'src/app/shared/models/appointment';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  @Input('maxPages') maxPages: number = 0;
  @Input('current') currentPage: number = 0;
  @Output('pageChange') onPageChange = new EventEmitter<number>();  
  constructor(private healthService: HealthServicesService){}

  filters:any ={
    page:1,
    limit:2
  };

  buttonLimit: number = 100;
  get lowerButtonLimit():number{
    return Math.abs(this.currentPage / this.buttonLimit) < 1 ? 0 : this.currentPage - 3;
  }
  get upperButtonLimit():number{
    return Math.min(this.maxPages, Math.abs(this.currentPage/ this.buttonLimit) < 1 ? this.buttonLimit: this.currentPage + 2 );
  }
  get pageButton():number[] {
    return new Array(this.maxPages).fill(null).map((v,i)=> i + 1);
  }
  gotoPage(newPage: number):void{
    this.filters.page= (newPage<=0)? 1:(newPage> this.maxPages)? this.maxPages :newPage;
    this.appointments_2()
    console.log(newPage)
  }
  ngOnInit(): void {
    // this.appointments();
    this.appointments_2();
    
  }
// medstaff?:Doctor[]=[];
// meetings:any=[];
meetingsData:Appointment[]=[];
checkCode:boolean = false;
  
// appointments(){
//     this.healthService.fullListAppointments().subscribe(res=>{
//     // const schedule = this.healthService.fullListAppointments().subscribe(res=>{
//       // if(res['appointments']=='success'){
//       // if(res['status']=='success'){
//         this.meetings = res['data']['appointments'];
//       // }else{
//       //   this.checkCode = true;
//       // }

//       console.log(res['status']);
//       console.log(res['result']);
//       console.log(res['data']['appointments']);
//     })
//   }

appointments_2(){
    this.healthService.fullListAppointments_2(this.filters).subscribe(res=>{
    // const schedule = this.healthService.fullListAppointments().subscribe(res=>{
      if(res.status =='success'){
      // if(res['status']=='success'){
        this.meetingsData = res.data!['appointments2'];
        this.maxPages = res['numPages']
      // }else{
      //   this.checkCode = true;
      }

      console.log(res['status']);
      // console.log(res['result']);
      // console.log(res['data']['appointments']);
    })
  }
}

