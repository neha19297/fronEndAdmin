import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChapterServiceService {

  constructor(private http:HttpClient) { }
  chapterService(data:any){
    // console.log("service called");
    return this.http.post("http://localhost:3000/courseChapter",data)
    
  }
}
