import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title!: string;
  constructor() { 
    this.title = 'Courses';
  }

  ngOnInit(): void {
  }

}
