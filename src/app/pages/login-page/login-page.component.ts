import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(private formBuiler:FormBuilder, private authser:AuthService, private router:Router){

  }
  // loginForm = new FormGroup({
  //   email: new FormControl('abc'),
  //   password: new FormControl()
  // });

    loginForm= this.formBuiler.group({
      email:[null, [Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]]
    })

    get email(){
      return this.loginForm.get('email');
    }
    get password(){
      return this.loginForm.get('password');
    }
    onSubmit(){
      // console.log(this.loginForm.value);
      this.authser.login(this.loginForm.value).subscribe((response:any)=>{
        console.log(response);
        this.responseText= 'Login success, thank you'
        this.alertClass= 'alert alert-success'
        localStorage.setItem("token", response.access_token)
        this.router.navigateByUrl('')

      },(error:any)=>{
        this.responseText= 'Oops! Something went wrong, try again'
        this.alertClass= 'alert alert-danger'
        console.log(error);
      })
      }
      responseText=''
      alertClass=''

    

}
