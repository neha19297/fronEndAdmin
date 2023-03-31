import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { que_upload } from '../dataType';
@Injectable({
  providedIn: 'root'
})
export class QuestionUploadService {
que_api=environment.que_api;
  constructor(private http :HttpClient) { }
que_upload(data:que_upload){
  // console.log("service called");
  return this.http.post(this.que_api,data)
}//post to local host
queList(){
  return this.http.get<que_upload[]>(this.que_api);
}
deleteQuestion(id:number){
return this.http.delete('http://localhost:3000/question_upload/${id}')
}
getQue(id:string){
  return this.http.get<que_upload>('http://localhost:3000/question_upload/${id}')
}
updateQue(que:que_upload){
  return this.http.put<que_upload>('http://localhost:3000/question_upload/${que.id}',que)
}
}

