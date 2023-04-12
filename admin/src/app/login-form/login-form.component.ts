import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
   })
  
export class LoginFormComponent implements OnInit {

   hide: boolean = false;

  constructor(private fb: FormBuilder,
    private http :HttpClient,
    private router:Router

     ) {
  }

  ngOnInit() {
    //  this.loginFn();
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  // get f() { return this.loginForm.controls; }

  loginFn(loginForm:FormGroup) {
    console.log("login works");
    console.log(this.loginForm.value);
    //added
    this.http.get<any>("http://13.233.223.217:2020/users/registration")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.email ===this.loginForm.value.email &&
         a.password=== this.loginForm.value.password
      });
      if(user){
        alert("You are successfully login");
        this.loginForm.reset();
        this.router.navigate(['dashboard'])
      }
      else{
        alert("user not found")
        this.router.navigate(['login'])
      }
    } ,err=>{
      alert('something went wrong')
    })
  }
}
        //previous
      //   if(true){
      //     alert("login success");
      //     this.loginForm.reset();
      //     this.router.navigate(['dashboard'])
      //   }
      //   else{
      //     alert("user not found")
      //   }
      // }
