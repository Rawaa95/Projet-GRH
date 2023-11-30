import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  url = 'http://127.0.0.1:3000/admin/';

  register( admin: any ){

    return this.http.post( this.url + 'register' , admin )
  }
}
