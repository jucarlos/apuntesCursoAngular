import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from '../../environments/environment.prod';
import { UsuarioService } from './usuario.service';
import { map } from 'rxjs/operators';
import { TipoVehiculo } from '../models/tipo-vehiculo';


@Injectable({
  providedIn: 'root'
})
export class TipovehiculoService {

  httpHeaders = new HttpHeaders(
    {
      'Content-Type': 'application/json',
      token: this.usuarioService.token || ''
    },
  );

  constructor(private http: HttpClient, public usuarioService: UsuarioService) { }

  getTiposVehiculos(): Observable<any> {

    const url = URL_SERVICIOS + '/tipovehiculo';
    return this.http.get( url, { headers: this.httpHeaders })
    .pipe(
      map( (resp: any) => resp.tipoVehiculos )
    );

  }

  getTipoVehiculo( id: string ): Observable<any> {

    const url = URL_SERVICIOS + '/tipovehiculo' + '/' + id ;
    return this.http.get( url, { headers: this.httpHeaders } );

  }


  borrarTipoVehiculo( tipoVehiculo: TipoVehiculo ): Observable<any> {

    const url = URL_SERVICIOS + '/tipovehiculo' + '/' + tipoVehiculo._id;
    return this.http.delete( url , { headers: this.httpHeaders });
    // console.log('Borrado en el servicio');
  }

  guardarTipoVehiculo( tipoVehiculo: TipoVehiculo ): Observable<any> {

    // console.log(tipoVehiculo); 

    let url = URL_SERVICIOS + '/tipovehiculo' ;

    if ( tipoVehiculo._id ) {
      url += '/' + tipoVehiculo._id;
      return this.http.put(url, tipoVehiculo , { headers: this.httpHeaders });
    } else {
      return this.http.post(url, tipoVehiculo , { headers: this.httpHeaders });
    }
  }


}
