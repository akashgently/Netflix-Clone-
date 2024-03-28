import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';

const BASE_URL = ['http://localhost:8080/']

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(signupRequest: any): Observable<any> {
    return this.http.post(BASE_URL + 'sign-up', signupRequest);
  }
  // getDataByKey(key: string): Observable<any[]> {
  //   return this.http.get<any[]>(`/api/data/${key}`);
  // }

  fetchFormData(): Observable<any[]> {
    return this.http.get<any[]>(BASE_URL + 'formdata');
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post(BASE_URL + 'authenticate', loginRequest);
  }

  create(formRequest: any): Observable<any> {
    return this.http.post(BASE_URL + 'users', formRequest);
  }

  hello(): Observable<any> {
    return this.http.get(BASE_URL + 'api/hello', {
      headers: this.createAuthorizationHeader(),
    });
  }

  getAllMovies(): Observable<AppComponent[]> {
    return this.http.get<AppComponent[]>(BASE_URL + 'movies');
  }

  searchMovies(searchTerm: string): Observable<AppComponent[]> {
    return this.http.get<AppComponent[]>(
      `${BASE_URL}search?searchTerm=${searchTerm}`
    );
  }

  private createAuthorizationHeader() {
    const jwtToken = localStorage.getItem('JWT');
    if (jwtToken) {
      return new HttpHeaders().set('Authorization', 'Bearer ' + jwtToken);
    } else {
      console.log('JWT token not found in the Local Storage');
    }
    return null;
  }
  sendConfirmationEmail(email: string): Observable<any> {
    return this.http.post<any>(`${BASE_URL}/send-email`, { email });
  }
}
