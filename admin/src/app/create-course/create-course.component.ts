import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseServiceService } from '../services/course-service.service';
import { Router } from '@angular/router';
import {courses} from '../dataType';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {
  courseTypes:any[]=["Science","Arts","Commerce","Engineering","Technology"];
  courseNames:any[]=["Physics","Chemistry","Math"]
  classes:any[]=["I","II","III","IV","V","VI","VII","VIII","IX","X"]
  syllabus:any[]=["CBSE","ICSE","State Board"]
  ProfileDP='';
  // courseId='';
  courseForm = new FormGroup({
    id:new FormControl("", [Validators.required]),
    courseType:new FormControl("", [Validators.required]),
    courseName:new FormControl("", [Validators.required]),
    class:new FormControl("", [Validators.required]),
    syllabus:new FormControl("", [Validators.required]),
    board:new FormControl("", [Validators.required])
    // image: new FormControl("", []),
  })
  constructor(private courseService: CourseServiceService,
    private router:Router) { }

  ngOnInit(): void {
    this.ProfileDP='/assets/img.png';
    // this.courseId="1234"
  }
  courseFn(data:courses):void{
  console.log(this.courseForm.value);
  this.courseService.course(data)
  .subscribe((result=>{
        console.log(result);
        if (result){
          this.router.navigate(['courseChapter'])
        }
        
      }))


  // if(this.courseForm.value.courseName=="Physics"){
  //   this.courseId="1234";
  // }
  // if(this.courseForm.value.courseName=="Chemistry"){
  //   this.courseId="1235";
  // }
  // else{
  //   this.courseId="1236";
  // }
  
}
selectFile(event:any) {

  if (event.target.files) {
  
  var reader = new FileReader()
  
  reader.readAsDataURL(event.target.files[0])
  
  reader.onload = (event: any) => {
  
  this.ProfileDP= event.target.result
  
  }
}
}
}
