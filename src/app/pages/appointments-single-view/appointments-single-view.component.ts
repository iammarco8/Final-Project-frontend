import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HealthServicesService } from 'src/app/services/health-services.service';
import { AppointmentSingle } from 'src/app/shared/models/appointment';

@Component({
  selector: 'app-appointments-single-view',
  templateUrl: './appointments-single-view.component.html',
  styleUrls: ['./appointments-single-view.component.css']
})
export class AppointmentsSingleViewComponent implements OnInit{
  constructor(private healthService: HealthServicesService,
              private route: ActivatedRoute  ){}

  ngOnInit(): void {
    this.appointment();
  }
  schedule?:AppointmentSingle;
  // schedule?:any;
  schedule_2:any=[];
  id:number = 0;

  appointment(){
    this.id = this.route.snapshot.params['id'];
    this.healthService.singleAppointments(this.id).subscribe(res=>{
      this.schedule = res['data']!['appointment'];
      console.log(res['data']!['appointment'])
    })
  }
  // appointment_2(){
  //   this.id = this.route.snapshot.params['id'];
  //   this.healthService.singleAppointments(this.id).subscribe(res=>{
  //     this.schedule_2 = res['data']['appointment'];
  //     // console.log(res['data'])
  //   })
  // }

}
