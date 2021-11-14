import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {

    loginForm!: FormGroup;
    loading = false;
    submitted = false;


    constructor(
        private formBuilder: FormBuilder,
        private router: Router

    ) { }


    ngOnInit() {
      console.log(localStorage.getItem('verifiedUser'))
      if(localStorage.getItem('verifiedUser')=='true'){
  this.router.navigate(['/secure/dashboard']);
      }
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    onSubmit() {
        this.submitted = true;

        if(this.loginForm.valid){
          this.loading==true;
          if(this.loginForm.value.username=="test@check.io"&&this.loginForm.value.password=="pass"){
            localStorage.setItem('verifiedUser', "true")
          this.router.navigate(['/secure/dashboard']);
          }else{
             this.loading==true;
          }
        }


        }
}
