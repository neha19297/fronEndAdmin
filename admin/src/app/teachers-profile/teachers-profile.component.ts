import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-teachers-profile',
  templateUrl: './teachers-profile.component.html',
  styleUrls: ['./teachers-profile.component.scss']
})
export class TeachersProfileComponent implements OnInit {
  // emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  profileForm = new FormGroup({

    fname : new FormControl("", [Validators.required, Validators.maxLength(32)]),
    lname : new FormControl("", [Validators.required, Validators.maxLength(32)]),


    email : new FormControl("", [Validators.required, Validators.maxLength(32),
      // Validators.pattern(this.emailRegex)
    ]),
      subject : new FormControl("", [Validators.required]),

      startDate : new FormControl("", [Validators.required]),

      endDate : new FormControl("", [Validators.required]),

    })
  
   

  constructor() { }

  ngOnInit(): void {
  }

profileFn(data:any) {
  console.log("profile works");
  console.log(data);
}
}
