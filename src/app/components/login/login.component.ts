import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor( private authService: AuthService, private router: Router ) { }

  ngOnInit() {
  }

  loginUser(){
    let user = {
      username: this.username,
      password: this.password
    }

    this.authService.login(user).subscribe(data => {
      console.log(data);
      if(data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.router.navigate(['dashboard']);
      } else {
        console.log('Login Failed');
        this.router.navigate(['login']);
      }
    });
  }

}
