import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.component.html',
  styleUrls: ['./course-overview.component.scss']
})
export class CourseOverviewComponent implements OnInit {
  courseNames:any[]=["Physics","Chemistry","Math"]
  constructor() { }

  ngOnInit(): void {
  }

}
