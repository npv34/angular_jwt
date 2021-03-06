import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LoginService} from "../login.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  login() {
    let data = this.loginForm.value;
    this.loginService.login(data).subscribe(res => {
      if (res.status == 'success') {
         let jwt = res.data.token;
         localStorage.setItem('token', JSON.stringify(jwt));
          this.router.navigate(['admin'])
      } else {
        console.log(res)
      }
    })
  }

}
