import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-groups',
  templateUrl: './register-groups.component.html',
  styleUrls: ['./register-groups.component.scss']
})
export class RegisterGroupsComponent implements OnInit {

  error = ""
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    console.log(form.value)
  }

}
