import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
forgotPasswordForm = new FormGroup({
  email:new FormControl(''),
  mobile:new FormControl('')
})
  constructor() { }

  ngOnInit() {
  }
  onOTP(){
    window.alert("OTP sent to your Mobile Number and Email");
  }

}
