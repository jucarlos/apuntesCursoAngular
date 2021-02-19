import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Cliente } from '../models/cliente';
import { SubirArchivoService } from './subir-archivo.service';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  httpHeaders = new HttpHeaders(
    {
      'Content-Type': 'application/json',
       token: this.usuarioService.token,
    }
  );


  constructor(
      private http: HttpClient,
      private subirArchivoService: SubirArchivoService,
      private usuarioService: UsuarioService) { }



        // este método tiene que llevar el token
  buscarClientes( termino: string ): Observable<any> {

    // Si no  lo borro lo añade siempre y a la segunda, da error.

    const url = `${URL_SERVICIOS}/buscar/clientes/${termino}`;
    return this.http.get( url,  { headers: this.httpHeaders } )
    .pipe(
      map ( (resp: any) => {
        return resp;
      })
    );

  }

  borrarCliente( id: string ): Observable<any> {
    const url = URL_SERVICIOS + '/cliente' + '/' + id;
    return this.http.delete( url );

  }


  getClientes(desde = 0 ): Observable<any> {

    const url = URL_SERVICIOS + '/cliente?limite=5&desde=' + desde;
    return this.http.get( url, { headers: this.httpHeaders} )
    .pipe(
      map ( (resp: any) => {
        // return resp.clientes;
        return resp;
      })
    );
  }

  getCliente( id: string ): Observable<any> {
    const url = URL_SERVICIOS + '/cliente' + '/' + id;
    return this.http.get( url );
  }

  guardarCliente( cliente: Cliente): Observable<any> {

    let url = URL_SERVICIOS + '/cliente';

    if ( cliente._id ){
      url += '/' + cliente._id;
      return this.http.put( url, cliente, { headers: this.httpHeaders} );
    } else {

      return this.http.post( url, cliente, { headers: this.httpHeaders} );
    }

  }

  cambiarImagen( archivo: File, id: string ): Promise<any> {
    return this.subirArchivoService.subirArchivo( archivo , 'clientes', id );
  }


}
