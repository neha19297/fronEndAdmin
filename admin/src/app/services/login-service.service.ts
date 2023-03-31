import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { login } from '../dataType';
import { APIserviceService } from './apiservice.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  hide: boolean = false;
  login_api=environment.login_api;
  constructor(private http:HttpClient ,
    private api:APIserviceService,
  
  ) { }
onLogin(data:any){
console.log("service called");
 return this.http.get('http://localhost:3000/login',data)
}

//   onLogin(data:login) {
//   let result= this.api.POST(this.login_api)
//   .subscribe((result)=>{
//     if(result){
//       console.log(result);
      
//     }
//   })  
// }
// log(data:any){
//   // console.log("service called");
//   return this.http.post('http://localhost:3000/login',data);
// }
// onLogin(data:login){
//   // console.log("service called");
//   return this.http.post(this.login_api,data)
// }

}