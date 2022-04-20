import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {

  // categories = [
  //   {id: 1, name: 'Development'},
  //   {id: 2, name: 'Arts'},
  //   {id: 3, name: 'Languages'}
  // ];
  // constructor() { }

  // submit(value : Object){
  //    console.log(value);
  // }

  form = new FormGroup ({
    topics : new FormArray([])
  });
 
  get topics() {return <FormArray>this.form.get('topics')};

  addTopic(topic: HTMLInputElement) {
      this.topics.push(new FormControl(topic.value));
      topic.value= '';
  }

  removeTopic(topic: any) {
   let index= this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  ngOnInit(): void {
  }

}
