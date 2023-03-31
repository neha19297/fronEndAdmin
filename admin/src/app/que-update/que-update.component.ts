import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { que_upload } from '../dataType';
import { QuestionUploadService } from '../services/question-upload.service';

@Component({
  selector: 'app-que-update',
  templateUrl: './que-update.component.html',
  styleUrls: ['./que-update.component.scss']
})
export class QueUpdateComponent implements OnInit {
  productData:undefined | que_upload;
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
  constructor(private route:ActivatedRoute,
    private queService:QuestionUploadService) { }

  ngOnInit(): void {
    let que_id=this.route.snapshot.paramMap.get('id');
    console.log(que_id);
    que_id &&  this.queService.getQue(que_id)
    .subscribe((result)=>{
      console.log(result);
      this.productData=result;
    })
  }
  submitForm(data:any){
console.log(data);
this.queService.updateQue(data).subscribe((result)=>{
if(result){
console.log("updated");

}
})
  }
}
