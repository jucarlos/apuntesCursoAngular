import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  headers = new HttpHeaders({
      'Content-Type': 'application/json',
       token: 'TOKENENINTERCEPTOR'
  });

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('Pasando por el interceptor');

    const reqClone = req.clone({
      headers: this.headers
    });

    //  Así lo devolvemos tal cual
    // return next.handle( req);

    // devolvemos el clonado
    // en la pestaña networks en el último que viene es, ponermos ver este token que mandamos.
    // Si queremos controlar el error lo pasamos por el pipe y catchError y método
    return next.handle( reqClone )
    .pipe(
      catchError( this.controlErrores )  // lo que resuelva, que lo mande al método
    )  ;
  }

  controlErrores( error: HttpErrorResponse ): Observable<any> {
    console.warn('Error en la llamada');
    return throwError('Guardaremos el error');
  }
}
