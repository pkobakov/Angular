import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  
  course = {
    title: 'The Complete Angular Course',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores dolorem aperiam autem natus, possimus consequatur consequuntur deleniti molestias fuga dolorum quibusdam accusantium ab amet iusto illum hic nam. Placeat at ab quibusdam porro impedit praesentium dignissimos ipsa deserunt corporis ullam. Ullam sed ipsa eaque inventore? Alias quaerat cupiditate expedita in.',
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2022, 4, 1)
  }

  ngOnInit(): void {
  }

}
