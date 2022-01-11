import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient,private snackBar:MatSnackBar,private route:Router,private authService:AuthService) { }

  login(credentials:any){
    this.http.post(`${environment.BASE_URL}/login`,credentials).subscribe(response=>{
      sessionStorage.setItem('token',response['token'])
      this.authService.authentication(true)
      this.snackBar.open(`Welcome back ${credentials.get('username')}`,"Thanks")
      this.route.navigate(['certify'])
    },error=>{
      this.snackBar.open(`There was a problem logging you in, please check your credentials and try again.`,"Sorry!",)
    })
  }

  register(credentials:any){
    this.http.post(`${environment.BASE_URL}/register`,credentials).subscribe(response=>{
      this.snackBar.open(`Congratulations ${credentials.get('username')}, your account was successfully created.`,"Log in",)
      this.route.navigate(['#examples'])
    },error => {
      this.snackBar.open(" There was a problem creating your account.")
    })
  }

  logout(){
    sessionStorage.removeItem('token')
    this.authService.authentication(false)
  }
}
