import { HttpClient } from '@angular/common/http';
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
  constructor(private http:HttpClient) { }
  fileName = '';  
videoName='';
  ngOnInit(): void {
  }
  courseFn(data:any){
    console.log(this.courseForm);
    
  }
  onFileSelected(event:any) {  
  
    const file:File = event.target.files[0];  

    if (file) {  

        this.fileName = file.name;  

        const formData = new FormData();  

        formData.append("thumbnail", file);  

        const upload$ = this.http.post("/api/thumbnail-upload", formData);  

        upload$.subscribe();  
    }  
}  
onVideoSelected(event:any) {  
  
  const video:File = event.target.files[0];  

  if (video) {  

      this.videoName = video.name;  

      const formData = new FormData();  

      formData.append("thumbnail", video);  

      const upload$ = this.http.post("/api/thumbnail-upload", formData);  

      upload$.subscribe();  
  }  
}  
}
