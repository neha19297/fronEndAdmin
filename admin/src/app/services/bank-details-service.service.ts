import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIserviceService } from './apiservice.service';
import { Router } from '@angular/router';
import { bankDetail } from '../dataType';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BankDetailsServiceService {
  // isBankDetailsEnter=new BehaviorSubject<boolean>(false)
  bank_api=environment.bank_details_api;
  constructor(private http:HttpClient,
    private router:Router,
     private api:APIserviceService,
    ) { }
  
  accountData(data:bankDetail){
    
    console.log("service called");
    return this.http.post(this.bank_api,data)
    //  .subscribe((result)=>{
    //   console.log(result)});
     }
    // )
    // .subscribe((result)=>{
    //   console.log(result);
      
      // this.isBankDetailsEnter.next(true);
      // localStorage.setItem('user',JSON.stringify(result.body))
      // this.router.navigate(['loginForm'])

    
    // );
}
// }