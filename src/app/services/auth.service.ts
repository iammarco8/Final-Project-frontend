import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import{ environment } from ''
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // route connection for accessing the admin login
  private API_URL = 'http://localhost:6767/api/v1/';

  private tokenKey = 'authToken';

  public authToken?:string;
  public doc?:any;
  public admin?:any;
  constructor(private http: HttpClient) { }

  // functioning variables to be appleid to injectable functions
  private _saveToStorage(key:string, value:any){
    localStorage.setItem(key, value);
  }

  saveAuthToken(
    // token:string
  ):void{
    this._saveToStorage( 
      this.tokenKey,
       this.authToken
      // token
      );
  }

  public isLoggedIn(): boolean{
    let token = localStorage.getItem(this.tokenKey)
    return token != null && token.length > 0;
  }

  public getToken():string | null{
    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey): null;
  }

 doctorAppointments(): Observable<any>{
    return this.http.get<any>(this.API_URL+'/activeDoctor')
      .pipe(
        map((res)=>{
          return res;
        })
      );
  }

  getAdminProfileInformation(): Observable<any>{
    return this.http.get<any>(this.API_URL +'ActiveAdmin')
      .pipe(
        map((res)=>{
          return res
        })
      )
  }

  getDoctorProfileInformation(): Observable<any>{
    return this.http.get<any>(this.API_URL+ 'ActiveDoctor')
      .pipe(
        map((res)=>{
          return res
        })
      )
  }

  // posiible callback for retreiving current admin
  getCurrentAdmin(cb?: ()=> void){
    this.getAdminProfileInformation().subscribe((res)=>{
      if (res['status']=== 'success'){
        this.admin = res['data']!['user']; 
        if(cb){
          cb();
        }
      }
    })
  }
  getCurrentdoctor(cb?: ()=> void){
    this.getDoctorProfileInformation().subscribe((res)=>{
      if (res['status']=== 'success'){
        // this is comming in from the protectDoc function in the backend
        // initiated through the "use." middleware...
        // this.doc = res['data']!['doctor'];
        this.doc = res['data']!['user'];
        if(cb){
          cb();
        }
      }
    })
  }
  
  getDocAppointments(cb?:()=> void){
    this.doctorAppointments().subscribe((res)=>{
      if(res['status']=== 'success'){
        this.doc = res['data']!['user'];
        if(cb){
          cb();
        }
      }
    })
  }

  loginAdmin(data:any):Observable<any>{
    return this.http.post<any>(this.API_URL + 'admin/login', data)
    // return this.http.post<any>(this.API_URL1_2 + '/login', data)
            .pipe(
              map((res)=>{
                return res
              })
            );
  }

  loginDoc(data:any):Observable<any>{
    return this.http.post<any>(this.API_URL + 'doctors/login', data)
            .pipe(
              map((res)=>{
                return res
              })
            );
  }

  // create function that were made in the healthservice service will act as register.

  logoutAdmin(): void{
    localStorage.removeItem(this.tokenKey);
  }
}
