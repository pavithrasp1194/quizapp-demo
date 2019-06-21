import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { UserData } from '../user-data';
import { UserDetails } from '../user-details';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  dateObj = new Date();
  month = this.dateObj.getUTCMonth() + 1; // months from 1-12
  day = this.dateObj.getUTCDate();
  year = this.dateObj.getUTCFullYear();
  curmonth = this.month < 10 ? '0' + this.month : this.month;
  curdate = this.day < 10 ? '0' + this.day : this.day;
  maxDate = this.year + '-' + this.curmonth + '-' + this.curdate;

  show: boolean;
  showConfirmPwd: boolean;
  submitted = false;
  usersList = UserData;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  signupForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    dateOfBirth: [''],
    userName: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword : ['']
  }, {validator: this.checkPasswords });

  ngOnInit() {
  }

  showPassword() {
    this.show = !this.show;
  }

  showConfirmPassword() {
    this.showConfirmPwd = !this.showConfirmPwd;
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmPassword.value;
    return pass === confirmPass ? null : { notSame: true };
  }

  login() {
    this.router.navigate(['./login']);
  }

  signUp() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.signupForm.invalid) {
      return;
    } else {
      this.usersList.push({
        fullName: this.signupForm.controls.fullName.value,
        email: this.signupForm.controls.email.value,
        dateOfBirth: this.signupForm.controls.dateOfBirth.value,
        userName: this.signupForm.controls.userName.value,
        password: this.signupForm.controls.password.value
      });
      this.router.navigate(['./login']);
    }
  }

}
