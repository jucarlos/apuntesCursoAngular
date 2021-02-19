import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from '../../environments/environment';
import { Vehiculo } from '../models/vehiculo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculosClienteService {

  httpHeaders = new HttpHeaders(
    {
      'Content-Type': 'application/json',
      token: 'fadfadsfa'
    }
  );

  constructor(private http: HttpClient) { }

  obtenerVehiculo( id: string ): Observable<any> {

    const url = `${URL_SERVICIOS}/vehiculo/${id}` ;
    return this.http.get( url , { headers : this.httpHeaders });
  }

  obtenerVehiculosCliente( id: string ): Observable<any> {

    const url = URL_SERVICIOS + '/vehiculos-cliente' + '/' + id ;
    return this.http.get( url , { headers : this.httpHeaders });
  }

  guardarVehiculoCliente( vehiculo: Vehiculo ): Observable<any> {

    let url = URL_SERVICIOS + '/vehiculo';

    if ( vehiculo._id ) {
      url += '/' + vehiculo._id;
      return this.http.put( url, vehiculo, { headers: this.httpHeaders });
    } else {
      return this.http.post( url, vehiculo, { headers: this.httpHeaders });
    }

  }

  borrarVehiculo( id: string ): Observable<any> {
    const url = URL_SERVICIOS + '/vehiculo' + '/' +  id;
    return this.http.delete( url , { headers: this.httpHeaders });
  }
  
}
