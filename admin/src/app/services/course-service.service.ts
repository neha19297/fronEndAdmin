import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { courses } from '../dataType';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  course_api=environment.course_api;
  constructor(private http:HttpClient,private router:Router) { }
  course(data:courses){
    // console.log("service called");
    return this.http.post(this.course_api,data)
  //   .subscribe((result=>{
  //     console.log(result);
  //     if (result){
  //       this.router.navigate(['courseCard'])
  //     }
      
  //   }))
   }
}
