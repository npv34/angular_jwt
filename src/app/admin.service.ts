import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {
  }

  token = JSON.parse(localStorage.getItem('token'));
  headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.token);
  httpOptions = {
    headers: this.headers_object
  };

  getAllUser(): Observable<any> {
    return this.http.get(environment.url + '/users', this.httpOptions)
  }
}
