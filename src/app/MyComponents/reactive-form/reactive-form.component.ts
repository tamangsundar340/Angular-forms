import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  reactiveForm = new FormGroup({
    email : new FormControl(null, 
      [
        Validators.required,
        Validators.email
      ]),
      password : new FormControl(null, 
        [
          Validators.required,
          Validators.minLength(8)
        ])
  })

  onSubmit(){
    console.log(this.reactiveForm.value)
    this.reactiveForm.reset();
  }

}
