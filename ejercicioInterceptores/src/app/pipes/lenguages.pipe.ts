import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lenguages'
})
export class LenguagesPipe implements PipeTransform {

  transform(valor: string[]): string {

    const len = valor.map( (va: any) => {
      return va.nativeName;
    })

   // console.log( valor );
    return len.join('-') || '';
  }

}
