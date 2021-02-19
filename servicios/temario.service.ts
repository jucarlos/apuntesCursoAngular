import { Injectable } from '@angular/core';
import { Tema } from '../models/tema';
import { TEMARIO } from '../data/datostemario.json';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemarioService {

  constructor() { }

  // método síncrono
  getTemario(): Tema[] {
    return TEMARIO;
  }

  // Creamos un método para que sea reactivo/ asíncrona
  // reactivo -> tiempo real -> stream

  getTemarioAsync(): Observable<Tema[]> {
    return of (TEMARIO);
  }


}
