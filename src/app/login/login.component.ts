import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // loginForm = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl('')
  // })

  // email = 'nag@gmail.com';
  // password = 'nag@1234';
  loginForm = this.fb.group({
      email: ['',Validators.required,Validators.minLength(6)],
      password: ['',Validators.required,Validators.minLength(8)]
    })
  constructor(private fb: FormBuilder) {
    
  }
  ngOnInit() {
  }
  onLogin(){

    // this.email="nag@gmail.com";
    // this.password = "nag@1234";
    
   // window.alert("Hi User")
  }

}
