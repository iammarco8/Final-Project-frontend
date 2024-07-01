import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { HealthServicesService } from 'src/app/services/health-services.service';
import { Patient } from 'src/app/shared/models/appointment';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit{
  @Input('maxPages') maxPages: number = 0;
  @Input('current') currentPage: number = 0;
  @Output('pageChange') onPageChange = new EventEmitter<number>();
  constructor(private healthService: HealthServicesService){}

  filters:any ={
    page:1,
    limit:3
  };

  buttonLimit: number= 100;
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
    this.patient()
    console.log(newPage)
  }
  ngOnInit(): void {
    this.patient();
  }

  people?:Patient[]=[];

  patient(){
    this.healthService.fullListPatients(this.filters).subscribe(res=>{
      if(res.status == 'success'){
        this.people = res.data!['patients']
        this.maxPages = res['numPages'];
      }
    })
  }
}
