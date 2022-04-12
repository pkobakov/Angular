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
imgUrl: string;
colspan:number;
isActive:boolean;
 
  constructor (service: CoursesService) { 
    this.title = 'List of Courses';
    this.courses = service.getCourses();
    this.imgUrl = 'https://miro.medium.com/fit/c/294/294/1*gcODMN4611oDGJuh1UfUmQ.jpeg';
    this.colspan = 2;
    this.isActive = false;

    }

    onSave($event:any){

      $event.stopPropagation();
      console.log('Button was clicked', $event);
    }

    ondivclick(){
      console.log('Div was clicked');
    }

    onkeyup(){
      console.log('ENTER was pressed');
    }

    ngOnInit(): void {
    }

}
