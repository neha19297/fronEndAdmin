import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import {Router} from '@angular/router'
import { userRegistration } from '../dataType';
import { environment } from 'src/environments/environment';
import { APIserviceService } from './apiservice.service';
@Injectable({
  providedIn: 'root'
})
export class UserRegisterServiceService {
isUserLoggedIn=new BehaviorSubject<boolean>(false)
  constructor(private http:HttpClient ,
    private router:Router, 
    private api:APIserviceService) { }
  userRegister(data:userRegistration){
    
    console.log("service called");
    let result= this.api.POST(data)
    .subscribe((result)=>{
      console.log(result);
      
      this.isUserLoggedIn.next(true);
      localStorage.setItem('user',JSON.stringify(result.body))
      this.router.navigate(['loginForm'])

    }
    );
    
  }
  reloadUser(){
    if(localStorage.getItem('user')){
      this.isUserLoggedIn.next(true);    }
  }
}
