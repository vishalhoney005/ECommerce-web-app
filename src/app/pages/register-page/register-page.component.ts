import { Component } from '@angular/core';
import { IUser } from 'src/app/Models/user.model';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
    userModel: IUser ={};
    constructor(){
      // this.userModel = {
      //   firstName: "mark",
      //   email: 'mark@gmail.com',
      //   mobile : 9876543210,
      //   pasword: '123456'

    }
    onSubmitHandler(){
      console.log(this.userModel);
    }
}
