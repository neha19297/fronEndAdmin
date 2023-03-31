import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { que_upload } from '../dataType';
import { QuestionUploadService } from '../services/question-upload.service';

// import {questionUpload} from'../dataType';

@Component({
  selector: 'app-question-upload',
  templateUrl: './question-upload.component.html',
  styleUrls: ['./question-upload.component.scss']
})

export class QuestionUploadComponent implements OnInit {
addQueMsg:string|undefined;
questionList: que_upload[] | undefined ;
  subjects:any[]=["English","Hindi","Science","Mathematics","History","Geography"];
  questions:any[]=["Beginner","Intermediate","Advance","Genius"];
  options:any[]=["Single choice","Multi Choice"];
  myForm= new FormGroup({
    que_num : new FormControl("", [Validators.required]),
    subject:new FormControl("", [Validators.required]),
    chapter:new FormControl("", [Validators.required]),
    description :new FormControl("", [Validators.required]),
    category :new FormControl("", [Validators.required]),
    que_option :new FormControl("", [Validators.required]),
    option:new FormControl("", [Validators.required]),
    answer:new FormControl("", [Validators.required]),
  });

 

  
  constructor(public fb: FormBuilder,
    public queService:QuestionUploadService,
    public router:Router) { }

  ngOnInit(): void {
this.queService.queList().subscribe((result)=>{
  console.log(result);
  this.questionList=result;
})

  }
 
  submitForm(data:que_upload):void {
    console.log(this.myForm.value);
  this.queService.que_upload(data)
  .subscribe((result)=>{
// console.log(result);
if(result){
  this.addQueMsg="question is successfully added";
this.router.navigate(['questionBank'])
}
setTimeout(()=>(this.addQueMsg=undefined),3000)
// this.queService.add_que(que_upload);

  });
  }

}
