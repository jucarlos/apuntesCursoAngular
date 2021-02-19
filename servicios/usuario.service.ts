import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { URL_SERVICIOS } from '../../environments/environment';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // Loading para controlar cuando se está haciendo el login
  haciandoLoginLogout = false;
  autenticado = false;

   // Estas propiedades, para luego saber si está logueado.
  usuario: Usuario = new Usuario('', '', '');
  token = '';

  httpHeaders = new HttpHeaders(
    {'Content-Type': 'application/json'}
  );

  constructor(private http: HttpClient ) {
    this.cargarStorage();
    if ( this.estaAutenticado()) {
      console.log('SI', this.usuario.nombre);
      this.autenticado = true;
    } else {
      this.usuario = new Usuario('', '', '');
      this.autenticado = false;
      console.log('NO');
    }

   }


  login( usuario: Usuario, recuerdame: boolean ) {

    const url = URL_SERVICIOS + '/login';
    this.haciandoLoginLogout = true;

    return this.http.post( url, usuario, { headers: this.httpHeaders })
    .pipe(
      map( (data: any) => {
        this.usuario = new Usuario (data.usuario.nombre, data.usuario.email, data.usuario.password );
//         console.log( this.usuario );
        this.guardarStorage(data.usuario.nombre, data.token, data.usuario);
        this.haciandoLoginLogout = false;
        this.autenticado = this.estaAutenticado();

        if ( recuerdame ) {
          this.guardarStorageEmail( data.usuario.email );
       } else  {
         this.borrarStorageEmail();
       }


        return data;
      }),
      catchError ( err => {
        this.haciandoLoginLogout = false;
        this.autenticado = false;
        Swal.fire('Error', 'Error al iniciar sesión', 'info');
        return throwError(err);
      })
    );


  }


  crearUsuario(usuario: Usuario): Observable<any> {

    const url = URL_SERVICIOS + '/usuarios';

    return this.http.post(url, usuario, { headers: this.httpHeaders } )
    .pipe(
      map( (resp: any) => {
        Swal.fire ('Usuario Creado', usuario.email, 'success');
        
        return resp.usuario;
      }),
      catchError( (err: any) => {
        Swal.fire('Error', err.error.error.message, 'info');
        console.log('Error: ', err);

        // cualquiera de los dos return vale. tienen que se un observable
        return of (err) ;
       // return throwError( error );
      })
    );
  }


  guardarStorage( nombre: string, token: string , usuario: Usuario) {
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify( usuario ));
    this.usuario = usuario;
    this.token = token;
  }

  cargarStorage() {
    if ( localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }
  }


  estaAutenticado() {

    const payload: any = this.obtenerDatosToken();

    if ( payload != null && payload.usuario.nombre.length > 3 && payload.usuario.nombre === this.usuario.nombre ) {

      if ( this.isTokenExpirado( payload.exp )) {
        this.logout();
        return false;
      }

      this.autenticado = true;
      return true;

    } else {
      this.logout();
      return false;
    }
  }

  obtenerDatosToken(): any {

    if (this.token.length > 5) {
       return JSON.parse(atob(this.token.split('.')[1]));
    }
    return null;
  }


  isTokenExpirado(exp: number ): boolean {

    const now = new Date().getTime() / 1000;

    console.log( 'Fecha actual: ', new Date(now * 1000));
    console.log ( exp);
    console.log( 'Fecha caduda: ', new Date(exp * 1000));

    if (exp < now) {
      return true;
    }
    return false;

  }

  logout() {
    this.borrarStorage();
  }

  borrarStorage() {
    localStorage.removeItem('nombre');
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.usuario = new Usuario('', '', '');
    this.token = '';
    // this.borrarStorageEmail();
    this.autenticado = false;
  }

  guardarStorageEmail( email: string ) {
    localStorage.setItem('email', email );
  }
  borrarStorageEmail() {
    localStorage.removeItem('email');
  }



}
