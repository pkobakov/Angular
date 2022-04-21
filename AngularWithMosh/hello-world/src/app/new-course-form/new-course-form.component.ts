import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  // form = new FormGroup ({
  //   topics : new FormArray([])
  // });
 
  // get topics() {return <FormArray>this.form.get('topics')};

  // addTopic(topic: HTMLInputElement) {
  //     this.topics.push(new FormControl(topic.value));
  //     topic.value= '';
  // }

  // removeTopic(topic: AbstractControl) {
  //  let index= this.topics.controls.indexOf(topic);
  //   this.topics.removeAt(index);
  // }

   form = new FormGroup ({
      name: new FormControl(),
      contact: new FormGroup({
        email: new FormControl(),
        phone: new FormControl()
      }),
      topics: new FormArray([])
    });
   
  // FormBuilder of the above code is:
  newForm: any;
  constructor(builder: FormBuilder){
  this.newForm = builder.group ({
      name: ['', Validators.required],
      contact: builder.group ({
        email: [],
        phone: []
      })
    });

  }
   

  ngOnInit(): void {
  }

}
