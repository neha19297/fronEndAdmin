import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordMatch } from '../passwordMatch';
import { UserRegisterServiceService } from '../services/user-register-service.service';
import {userRegistration} from '../dataType';
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from '@angular/material';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  providers:[UserRegisterServiceService]
})
export class RegistrationFormComponent implements OnInit {
  title="registration-form";
  

  integreRegex=/^\d+$/;
  emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  registerForm = new FormGroup({

    lastName : new FormControl("", [Validators.required, Validators.maxLength(32)]),


    // mobile : new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10), 
    //   Validators.pattern(this.integreRegex)]),

    email : new FormControl("", [Validators.required, Validators.maxLength(32),
      Validators.pattern(this.emailRegex)]),

    password : new FormControl("", [Validators.required, Validators.maxLength(32), 
      Validators.minLength(8)]),

    cpassword : new FormControl("", [Validators.required, Validators.maxLength(32),
       Validators.minLength(8)]),


      
  },[ passwordMatch("password", "cpassword") ])
  constructor(private userRegistration:UserRegisterServiceService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) { 
      this.matIconRegistry.addSvgIcon(
        "logo",
        this.domSanitizer.bypassSecurityTrustResourceUrl("data:image/jpeg;base64,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"));
    }

  ngOnInit(): void {
    this.userRegistration.reloadUser()
  }
  getControl(name: any): AbstractControl | null {
    return this.registerForm.get(name)
  }
  registerFn(data:userRegistration):void{
    console.log(this.registerForm.value );
    this.userRegistration.userRegister(data)
  }  
}
