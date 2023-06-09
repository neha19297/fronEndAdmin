import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserRegisterServiceService } from './services/user-register-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private registerService:UserRegisterServiceService){}
  canActivate(
    route: ActivatedRouteSnapshot,
   
    
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
        if(localStorage.getItem('user')){
          return true;    }
      
      return this.registerService.isUserLoggedIn;
  }
  
  
}
