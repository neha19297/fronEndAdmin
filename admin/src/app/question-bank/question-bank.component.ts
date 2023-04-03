import { Component, OnInit } from '@angular/core';
import { que_upload } from '../dataType';
import { QuestionUploadService } from '../services/question-upload.service';
import {MatTableDataSource} from "@angular/material/table";
// import question_upload from '../../db.json';
@Component({
  selector: 'app-question-bank',
  templateUrl: './question-bank.component.html',
  styleUrls: ['./question-bank.component.scss']
})
export class QuestionBankComponent implements OnInit {
// questionList:que_upload[]=question_upload;
questionList:que_upload[]=[];
  public displayedColumns: string[] = ['que_num','subject', 'chapter','description',
  'category','que_option','option','answer','id'];
  // public dataSource = this.questionList;
  queDeleteMsg:undefined | string;
  public dataSource = new MatTableDataSource<que_upload>();
  constructor(public queService:QuestionUploadService ) { 
  }
 
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
  // this.questionList.push({"que_no":123});
  this.queService.queList().subscribe((result)=>{
    console.log(result);
    // this.questionList.push(result[0].que_no);
     this.dataSource.data=result;
  })
  
}

}
