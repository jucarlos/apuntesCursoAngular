import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  // httpHeaders = new HttpHeaders(
  //   {'Content-Type': 'application/json'}
  // );


  constructor(private http: HttpClient) { }

  getPaises() {

    const url = 'https://restcountries.eu/rest/v2/lang/es';
  
    return this.http.get( url);

  }
}
