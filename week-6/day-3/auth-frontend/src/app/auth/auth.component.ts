import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  constructor(private http: HttpClient) {}

  // REGISTER FORM
  registerUsername: string = '';
  registerPassword: string = '';

  register() {
    this.http.post<any>('http://localhost:8080/auth/register',
                        { username: this.registerUsername,
                          password: this.registerPassword }, 
                        { observe: 'response'}).subscribe(data => {
                          console.log(data.body);
                        })
  }

  // LOGIN FORM
  loginUsername: string = '';
  loginPassword: string = '';

  jwtValue: string = '';

  login() {
    this.http.post<any>('http://localhost:8080/auth/login',
                        { username: this.loginUsername,
                          password: this.loginPassword }, 
                        { observe: 'response'}).subscribe(data => {
                          console.log(data.body);
                          this.jwtValue = data.body.access_token;
                          console.log(this.jwtValue);
                        })
  }

  getStudents() {
    let newHeaders = new HttpHeaders();
    newHeaders = newHeaders.append('Authorization', `Bearer ${this.jwtValue}`);

    this.http.get<any>('http://localhost:8080/student', 
      { observe: 'response', headers: newHeaders } )
      .subscribe(data => {
        console.log(data.body);
      })
  }

}
