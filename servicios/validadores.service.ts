import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

interface ErrorValidate {
  [s: string]: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  // Un validaddor es una función que devuelve un objeto.
  // el objeto tiene una propiedad o varias string
  // y cada una de ellas un boolean
  // Por ejemplo una validación que impida grabar un nombre que sea Pedro

  noPedro( control: FormControl ) : {[s: string]: boolean} {

    // Devolverá algo como
    // return {
    //   noPedro: true,
      
    // }

        if ( control.value?.toLowerCase() === 'pedro') {
          return {
            noPedro: true,
          }
        } else {
          return null;
        }


  }

  
  // Hay que devolver una promesa que resuelve el objeto
  existeUsuario(control: FormControl): Promise<ErrorValidate> | Observable<ErrorValidate> {

    if ( !control.value ) {
      return Promise.resolve(null);
    }

    return new Promise( ( resolve, reject ) => {

      setTimeout(() => {

        if ( control.value === 'usuario') {
          resolve( {
            existe: true
          })
        } else {
          resolve ( null );
        }
        
      }, 3000);
    
    });

  }


  passwordsIguales( pass1Name: string, pass2Name: string ) {

    // Tiene que devolver una función
    // Como se hace a nivel de formulario, pues se va a recivir un formgrupo.
    // Todo el formulario

    return (formGroup: FormGroup) => {
        const p1Control = formGroup.controls[pass1Name];
        const p2Control = formGroup.controls[pass2Name];

        if ( p1Control.value === p2Control.value ) {
          p2Control.setErrors(null);
        } else {
          p2Control.setErrors({
            noEsIGual: true
          });
        }
    };
  }


}
