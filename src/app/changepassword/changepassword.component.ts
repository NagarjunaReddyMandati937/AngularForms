import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  changePassword: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.changePassword = this.fb.group({
      password: [''],
      confirmPassword: ['']
    })
  }
  onSubmit() {
    console.log(this.changePassword.value)
  }


}