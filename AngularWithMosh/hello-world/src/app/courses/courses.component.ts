import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
title: string;
courses: string []
 
  constructor (service: CoursesService) { 
    this.title = 'List of Courses';
    this.courses = service.getCourses();
   

  }

  ngOnInit(): void {
  }

}
