import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HealthServicesService } from 'src/app/services/health-services.service';
import { RoomSingle } from 'src/app/shared/models/appointment';
@Component({
  selector: 'app-rooms-single-view', 
  templateUrl: './rooms-single-view.component.html', 
  styleUrls: ['./rooms-single-view.component.css']
})
export class RoomsSingleViewComponent implements OnInit{
  constructor(private healthService: HealthServicesService, 
              private route:ActivatedRoute){}
  ngOnInit(): void { 
    this.Room(); 
  }
  place?:RoomSingle;
  id:number=0;
  Room(){
    this.id = this.route.snapshot.params['id'];
    this.healthService.singleRoom(this.id).subscribe(res=>{
      this.place = res['data']!['room']
      console.log(res['data']!['room'])
    })
  }
}
