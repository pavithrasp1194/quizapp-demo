import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserData } from '../user-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usersList = UserData;
  error: string;
  show: boolean;

  constructor(private router: Router, private fb: FormBuilder, private route: ActivatedRoute) {
    this.show = false;
  }

  loginForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });

  ngOnInit() {
      console.log(this.usersList);
  }

  login(): void {
    const user = this.usersList.filter(
      s => (s.userName === this.loginForm.controls.userName.value && s.password === this.loginForm.controls.password.value))[0];
    if (user) {
      this.router.navigate(['./user', this.loginForm.controls.userName.value]);
    } else {
      this.error = 'Invalid username and password!!!';
    }
  }

  showPassword() {
    this.show = !this.show;
  }

  signUp(): void {
    this.router.navigate(['./signup']);
  }

}
