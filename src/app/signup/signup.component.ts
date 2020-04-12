import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PasswordValidator } from '../shared/Password.Validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  //   signupForm = new FormGroup({
  //   username: new FormControl('Nagarjuna', Validators.required),
  //   email: new FormControl(''),
  //   password: new FormControl('', Validators.required),
  //   confirmPassword: new FormControl(''),
  //   mobile: new FormControl(''),
  // })
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: [''],
      confirmPassword: [''],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    }, { validator: PasswordValidator });


  }
  onSignup() {
    console.log(this.signupForm.value);
    window.alert("details entered successfully, check in console");
  }

}
