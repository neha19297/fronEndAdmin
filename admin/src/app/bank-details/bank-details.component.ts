import { Component, OnInit } from '@angular/core';
import {  AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { accountMatch } from '../accountMatch';
import {bankDetail} from'../dataType';
import { BankDetailsServiceService } from '../services/bank-details-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.scss']
})
export class BankDetailsComponent implements OnInit {
#title = 'mouse-hover';

  banks:any[]=["SBI","ICICI","HDFC"];

  integreRegex=/^\d+$/;
  bankForm = new FormGroup({
    bank:new FormControl("", [Validators.required]),
  name : new FormControl("", [Validators.required, Validators.maxLength(32)]),
ifsc : new FormControl ("",[Validators.required]),
  account : new FormControl("", [Validators.required, Validators.minLength(10), 
      Validators.maxLength(10), 
      Validators.pattern(this.integreRegex)]),
  // cAccount : new FormControl("", [Validators.required, Validators.minLength(10), 
  //       Validators.maxLength(10), 
  //       Validators.pattern(this.integreRegex)])
      }
      // ,[ accountMatch("account", "cAccount") ]
      )
  constructor(private bankService: BankDetailsServiceService,private router :Router) { }

  ngOnInit(): void {
    
  }
  getControl(name: any): AbstractControl | null {

    return this.bankForm.get(name)

  }
  bankFn(data:bankDetail){
    console.log(data );
    this.bankService.accountData(data)
     .subscribe((result)=>{
      console.log(result);
      if(result){
      this.router.navigate(['payment'])
      }
      
    });
    // this.bankDetails.accountData(data);
  }
  
}



