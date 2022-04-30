import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-members',
  templateUrl: './register-members.component.html',
  styleUrls: ['./register-members.component.scss']
})
export class RegisterMembersComponent implements OnInit {


  error = ""
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit( form: NgForm){
    console.log(form.value)
  }

}
