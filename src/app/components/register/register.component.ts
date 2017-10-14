import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string;
  email: string;
  password: string;
  username: string;

  constructor( private validateService: ValidateService, private authService: AuthService, private router: Router ) { }

  ngOnInit() {
  }

  registerUser() {
    let user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    }

    if(this.validateService.validateForm(user)) {
      console.log('All fields are required');
      return false;
    } 

    this.authService.register(user).subscribe(data => {
      if(data.success) {
        console.log('User Registation Successful');
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/register']);
        console.log('User Registration Failed');
      }
    });
    
  }

}
