import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-cards',
  templateUrl: './course-cards.component.html',
  styleUrls: ['./course-cards.component.scss']
})
export class CourseCardsComponent implements OnInit {
  courseNames:any[]=["Physics","Chemistry","Math"]

  constructor() { }

  ngOnInit(): void {
  }

}
