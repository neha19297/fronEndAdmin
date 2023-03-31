import { Component, OnInit } from '@angular/core';
import { que_upload } from '../dataType';
import { QuestionUploadService } from '../services/question-upload.service';

@Component({
  selector: 'app-question-bank',
  templateUrl: './question-bank.component.html',
  styleUrls: ['./question-bank.component.scss']
})
export class QuestionBankComponent implements OnInit {
  // displayedColumns: string[] = ['que_no', 'subject', 'chapter',
  //  'description','category','que_option','option','answer'];
   

  constructor(public queService:QuestionUploadService ) { }
  questionList:undefined | que_upload[]  ;
  queDeleteMsg:undefined | string;
  
    // dataSource = this.queService;
  ngOnInit(): void {
    this.list();
  }
deleteQue(id:number){
  console.log(id);
  this.queService.deleteQuestion(id).subscribe((result)=>{
    if(result){
      this.queDeleteMsg="que is deleted";
      this.list();
    }
  })
  setTimeout(()=>{
    this.queDeleteMsg=undefined;
  },3000)
}
list(){
  this.queService.queList().subscribe((result)=>{
    console.log(result);
    this.questionList=result;
  })
}

}
