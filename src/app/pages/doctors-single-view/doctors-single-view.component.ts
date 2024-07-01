import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HealthServicesService } from 'src/app/services/health-services.service';
import { DoctorSingle } from 'src/app/shared/models/appointment';
@Component({
  selector: 'app-doctors-single-view',
  templateUrl: './doctors-single-view.component.html',
  styleUrls: ['./doctors-single-view.component.css']
})
export class DoctorsSingleViewComponent implements OnInit {
  constructor(private healthService: HealthServicesService,
              private route:ActivatedRoute){}
  ngOnInit(): void {
    this.doctor();
  }
  person?:DoctorSingle;
  id:number = 0;
  doctor(){
    this.id = this.route.snapshot.params['id'];
    this.healthService.singleDoctors(this.id).subscribe(res=>{
      this.person = res['data']!['doctor'];
      console.log(res['data']!['doctor'])
    })
  }
}
