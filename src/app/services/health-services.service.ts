import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { ApiResponse } from '../shared/models/api-response';
import { Appointment, AppointmentSingle, Patient, PatientSingle, Admin, AdminSingle, Doctor, DoctorSingle, Room, RoomSingle } from '../shared/models/appointment';


@Injectable({
  providedIn: 'root'
})
export class HealthServicesService {
  doctorAppointments(filters: any) {
    throw new Error('Method not implemented.');
  }
  private API_URL = 'http://localhost:6767/api/v1'

  // this function calls the route required from the backend
  constructor(private _http:HttpClient) { }

  fullListAppointments():Observable<any>{
    return this._http.get<any>(this.API_URL+'/appointments')
      .pipe(
        map((res)=>{
          return res;
        })
      );
  }
  // Observable <APIResponse<appointment>
  fullListAppointments_2(filters:any):Observable<any>{
    return this._http.get<ApiResponse<Appointment[]>>(this.API_URL+'/appointments' , {params:filters})
      .pipe(
        map((res)=>{
          return res;
        })
      );
  }

  singleAppointments(id: number):Observable<ApiResponse<AppointmentSingle>>{
    return this._http.get<ApiResponse<AppointmentSingle>>(this.API_URL+`/appointments/${id}`)
      .pipe(
        map((res)=>{
          return res;   
        })
      );
  }

  createAppointment(data: any):Observable<any>{
    return this._http.post<any>(this.API_URL + '/appointments', data)
      .pipe(
        map((res)=>{
          return res;
        })
      )
  }

  updateAppointment(id: number, data: any):Observable<any>{
    return this._http.patch(this.API_URL + `/appointments/${id}`, data)
      .pipe(
        map((res)=>{
          return res;
        })
      );
  }

  deleteAppointment(id:number):Observable<any>{
    return this._http.delete<any>(this.API_URL + `/appointments/${id}`)
      .pipe(
        map((res)=>{
          return res;
        })
      );
  }

  fullListPatients(filters:any ):Observable<any>{
    return this._http.get<ApiResponse<Patient[]>>(this.API_URL+'/patients', {params:filters})
    .pipe(
      map((res)=>{
        return res;
      })
    );
  }

  singlePatient(id: number):Observable<ApiResponse<PatientSingle>>{
    return this._http.get<ApiResponse<PatientSingle>>(this.API_URL+`/patients/${id}`)
    .pipe(
      map((res)=>{
        return res;
      })
    );
  }

  createPatient(data: any):Observable<any>{
    return this._http.post<any>(this.API_URL + '/patients', data)
      .pipe(
        map((res)=>{
          return res;
        })
      )
  }

  updatePatient(id: number, data: any):Observable<any>{
    return this._http.patch(this.API_URL + `/patients/${id}`, data)
      .pipe(
        map((res)=>{
          return res;
        })
      );
  }

  deletePatient(id:number):Observable<any>{
    return this._http.delete<any>(this.API_URL + `/patients/${id}`)
      .pipe(
        map((res)=>{
          return res;
        })
      );
  }

  fullListDoctors( filters:any ):Observable<any>{
    return this._http.get<ApiResponse<Doctor[]>>(this.API_URL+'/doctors', {params:filters})
    .pipe(
      map((res)=>{
        return res;
      })
    );
  }

  // fullListDoctors( filters:any ):Observable<ApiResponse<Doctor[]>>{
  //   return this._http.get<ApiResponse<Doctor[]>>(this.API_URL+'/doctors', {params:filters})
  //   .pipe(
  //     map((res)=>{
  //       return res;
  //     })
  //   );
  // }

  singleDoctors(id: number):Observable<ApiResponse<DoctorSingle>>{
    return this._http.get<ApiResponse<DoctorSingle>>(this.API_URL+`/doctors/${id}`,)
    .pipe(
      map((res)=>{
        return res;
      })
    );
  }

  createDoctor(data: any):Observable<any>{
    return this._http.post<any>(this.API_URL + '/doctors', data)
      .pipe(
        map((res)=>{
          return res;
        })
      )
  }

  updateDoctor(id: number, data: any):Observable<any>{
    return this._http.patch(this.API_URL + `/doctors/${id}`, data)
      .pipe(
        map((res)=>{
          return res;
        })
      );
  }

  deleteDoctor(id:number):Observable<any>{
    return this._http.delete<any>(this.API_URL + `/doctors/${id}`)
      .pipe(
        map((res)=>{
          return res;
        })
      );
  }

  fullListAdmin( filters:any ):Observable<any>{
    return this._http.get<ApiResponse<Admin[]>>(this.API_URL+'/admin', {params:filters})
    .pipe(
      map((res)=>{
        return res;
      })
    );
  }

  singleAdmin(id:number):Observable<ApiResponse<AdminSingle>>{
    return this._http.get<ApiResponse<AdminSingle>>(this.API_URL+`/admin/${id}`)
    .pipe(
      map((res)=>{
        return res;
      })
    );
  }

  createAdmin(data: any):Observable<any>{
    return this._http.post<any>(this.API_URL + '/admin', data)
      .pipe(
        map((res)=>{
          return res;
        })
      )
  }

  updateAdmin(id: number, data: any):Observable<any>{
    return this._http.patch(this.API_URL + `/admin/${id}`, data)
      .pipe(
        map((res)=>{
          return res;
        })
      );
  }

  deleteAdmin(id:number):Observable<any>{
    return this._http.delete<any>(this.API_URL + `/admin/${id}`)
      .pipe(
        map((res)=>{
          return res;
        })
      );
  }

  fullListRoom( filters:any ):Observable<any>{
    return this._http.get<ApiResponse<Room[]>>(this.API_URL+'/rooms', {params:filters})
    .pipe(
      map((res)=>{
        return res;
      })
    );
  }

  singleRoom(id:number):Observable<ApiResponse<RoomSingle>>{
    return this._http.get<ApiResponse<RoomSingle>>(this.API_URL+`/rooms/${id}`)
    .pipe(
      map((res)=>{
        return res;
      })
    );
  }

  createRoom(data: any):Observable<any>{
    return this._http.post<any>(this.API_URL + '/rooms', data)
      .pipe(
        map((res)=>{
          return res;
        })
      )
  }

  updateRoom(id: number, data: any):Observable<any>{
    return this._http.patch(this.API_URL + `/rooms/${id}`, data)
      .pipe(
        map((res)=>{
          return res;
        })
      );
  }

  deleteRoom(id:number):Observable<any>{
    return this._http.delete<any>(this.API_URL + `/rooms/${id}`)
      .pipe(
        map((res)=>{
          return res;
        })
      );
  }

}