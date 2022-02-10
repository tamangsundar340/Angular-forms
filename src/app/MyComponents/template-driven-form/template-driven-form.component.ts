import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  @ViewChild('loginForm', {static:true}) loginForm:any;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(loginForm:any){
    console.log(loginForm);
    this.loginForm.reset();
  }

}
