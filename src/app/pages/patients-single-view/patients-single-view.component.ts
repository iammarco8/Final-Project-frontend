import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HealthServicesService} from 'src/app/services/health-services.service';
import { PatientSingle } from'src/app/shared/models/appointment';

@Component({
  selector: 'app-patients-single-view',
  templateUrl: './patients-single-view.component.html',
  styleUrls: ['./patients-single-view.component.css']
})
export class PatientsSingleViewComponent implements OnInit {
  constructor(private healthService: HealthServicesService,
              private route:ActivatedRoute){}
  ngOnInit(): void {
    this.patient();
  }
person?:PatientSingle;
id:number = 0;

patient(){
  this.id = this.route.snapshot.params['id'];
  this.healthService.singlePatient(this.id).subscribe(res=>{
    this.person = res ['data']!['patients'];
    console.log(res['data']!['patients'])
  })
}
}
