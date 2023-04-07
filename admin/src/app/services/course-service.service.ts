import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { courses } from '../dataType';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  constructor(private http:HttpClient,private router:Router) { }
  course(data:courses){
    // console.log("service called");
    return this.http.post('http://localhost:3000/courses',data)
  //   .subscribe((result=>{
  //     console.log(result);
  //     if (result){
  //       this.router.navigate(['courseCard'])
  //     }
      
  //   }))
   }
}
