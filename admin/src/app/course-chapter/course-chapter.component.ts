import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-chapter',
  templateUrl: './course-chapter.component.html',
  styleUrls: ['./course-chapter.component.scss']
})
export class CourseChapterComponent implements OnInit {
  contents:any[]=["a","b","c"]

  courseForm = new FormGroup({
    course_id:new FormControl("", [Validators.required]),
    chapter_id:new FormControl("", [Validators.required]),

    chapterName:new FormControl("", [Validators.required]),
    chapterContent:new FormControl("", [Validators.required]),
    duration:new FormControl("", [Validators.required]),
   
  })
  constructor() { }

  ngOnInit(): void {
  }
  courseFn(data:any){
    console.log(this.courseForm);
    
  }
}
