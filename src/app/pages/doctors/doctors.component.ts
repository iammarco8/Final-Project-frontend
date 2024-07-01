import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HealthServicesService } from 'src/app/services/health-services.service';
import { Doctor } from 'src/app/shared/models/appointment';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit{
  @Input('maxPages') maxPages: number = 0;
  @Input('current') currentPage: number = 0;
  @Output('pageChange') onPageChange = new EventEmitter<number>();
  constructor(private healthService: HealthServicesService){}

  filters:any ={
    page:1,
    limit:2
  };

  // maxPages = 1;
  // gotoPage(newPage:number):void{
  //   this.filters.page = (newPage <= 0) ? 1: (newPage > this.maxPages) ? this.maxPages : newPage;
  // }
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
    this.doctor()
    console.log(newPage)
  }
  // gotoPage(newPage: number):void{
  //   this.onPageChange.emit(newPage);
  //   console.log(newPage)
  // }
  ngOnInit(): void {
    this.doctor();
  }

  medstaff?:Doctor[]=[];

  doctor(){
    this.healthService.fullListDoctors(this.filters ).subscribe(res=>{
      if(res.status== 'success'){
        this.medstaff = res.data!['doctor']
        this.maxPages = res['numPages'];
        // console.log(`RESPONSE FROM ANGULAR: ${JSON.stringify(res)}`)
      }
    })
  }
}
