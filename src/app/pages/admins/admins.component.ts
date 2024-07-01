import { Component,OnInit, EventEmitter, Input, Output } from '@angular/core';
import { HealthServicesService } from 'src/app/services/health-services.service';
import { Admin, Doctor, Patient, Room } from 'src/app/shared/models/appointment';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit{
  @Input('maxPages') maxPages: number = 0;
  @Input('current') currentPage: number = 0;
  @Output('pageChange') onPageChange = new EventEmitter<number>();
  constructor(private healthService: HealthServicesService){}

  filters:any ={
    page:1,
    limit:4
  };

  buttonLimit: number = 5;
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
    this.admin()
    console.log(newPage)
  }
  ngOnInit(): void {
    this.admin();
    this.doctor();
    this.patient();
    this.rooms();
  }

administration?:Admin[]=[];
area?:Room[]=[];
medstaff?:Doctor[]=[];
people?:Patient[]=[];

admin(){
  this.healthService.fullListAdmin(this.filters).subscribe(res=>{
    if(res.status == 'success'){
      this.administration = res.data!['admin']
      this.maxPages = res['numPages'];
    }
  })
}

patient(){
  this.healthService.fullListPatients(this.filters).subscribe(res=>{
    if(res.status == 'success'){
      this.people = res.data!['patients']
      this.maxPages = res['numpages'];
    }
  })
}

doctor(){
  this.healthService.fullListDoctors(this.filters ).subscribe(res=>{
    if(res.status== 'success'){
      this.medstaff = res.data!['doctor']
      this.maxPages = res['numPages'];
      // console.log(`RESPONSE FROM ANGULAR: ${JSON.stringify(res)}`)
    }
  })
}

rooms(){
  this.healthService.fullListRoom(this.filters).subscribe(res=>{
    if(res.status == 'success'){
      this.area = res.data!['rooms']
      this.maxPages =res['numPages'];
    }
  })
}
}