import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChapterServiceService {
  chapter_api=environment.course_chapter_api;
  constructor(private http:HttpClient) { }
  chapterService(data:any){
    // console.log("service called");
    return this.http.post(this.chapter_api,data)
    
  }
}
