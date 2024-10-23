import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  constructor(private http: HttpClient, private tokenService: TokenService) {}

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
                        { observe: 'response' }).subscribe(data => {
                          // console.log(data.body);
                          this.jwtValue = data.body.access_token;
                          // console.log(this.jwtValue);
                          this.tokenService.updateToken(data.body.access_token);
                        })
  }

  getStudents() {
    let newHeaders = new HttpHeaders();
    // newHeaders = newHeaders.append('Authorization', `Bearer ${this.jwtValue}`);

    this.http.get<any>('http://localhost:8080/student', 
      { observe: 'response', headers: newHeaders } )
      .subscribe(data => {
        console.log(data.body);
      })
  }

  // OAUTH

  oauthTokenValue: string = '';

  // this method won't really happen on your site in this way
  // you'll effectively redirect the user to the auth provider to log in
  getToken() {
    this.http.post<any>('https://dev-wuwoj0rn24tcj1e2.us.auth0.com/oauth/token',
      { client_id:'e1JnX2XTw872qnZLdI68QvCZR7ImXyIX',
        client_secret:'EiEajOOZMn7AhrsCbARgKrZvjEUiJp-l-gVRDR5VcADBvhamEYT5qrr3hxeeOOaZ',
        audience:'https://mean-demo-app.com',
        grant_type:'client_credentials' },
      { observe: 'response' })
      .subscribe(data => {
        // console.log(data.body);
        this.oauthTokenValue = data.body.access_token;
        this.tokenService.updateToken(data.body.access_token);
      })
  }

  getHello() {
    let newHeaders = new HttpHeaders();
    // newHeaders = newHeaders.append('Authorization', `Bearer ${this.oauthTokenValue}`);

    this.http.get<any>('http://localhost:3000', 
      { observe: 'response', headers: newHeaders } )
      .subscribe(data => {
        console.log(data.body);
      })
  }

}
