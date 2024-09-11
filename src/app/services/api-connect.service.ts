import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const token = '';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectService {
  baseUrl: string = 'https://api.waqi.info';
  constructor(private http: HttpClient) { }

  getData(city: string) : Observable<any> {
    return this.http.get(this.baseUrl+'/feed/@'+city+'/?token='+token);
  }
}
