import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class APIserviceService {

  constructor(private http: HttpClient,) { }
  registration_api = environment.registration_api;

GET(url:any) {
  return this.http.get<any>(url);
}
POST(data:any){
  return this.http.post<any>(this.registration_api,data);

}
DELETE(data:any){
  return this.http.delete<any>(this.registration_api,data)
}
}
